import { useForceUpdate } from '@tamagui/use-force-update'
import React, { useContext, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { getTamagui } from '../conf'
import { useIsomorphicLayoutEffect } from '../constants/platform'
import { areEqualSets } from '../helpers/areEqualSets'
import { ThemeContext } from '../ThemeContext'
import { ThemeManager, ThemeManagerContext, emptyManager } from '../ThemeManager'
import { ThemeObject } from '../types'
import { useConstant } from './useConstant'

type UseThemeState = {
  uuid: Object
  keys: Set<string>
  isRendering: boolean
}

export const useTheme = (
  themeName?: string | null,
  componentName?: string,
  props?: any
): ThemeObject => {
  const { name, theme, themes, themeManager, className, didChangeTheme } = useChangeThemeEffect(
    themeName,
    componentName,
    props
  )

  const state = useRef() as React.MutableRefObject<UseThemeState>
  if (!state.current) {
    state.current = {
      uuid: {},
      keys: new Set(),
      isRendering: true,
    }
  }
  state.current.isRendering = true

  // track usage
  useIsomorphicLayoutEffect(() => {
    const st = state.current
    st.isRendering = false
    const cur = themeManager?.keys.get(st.uuid)
    if (!cur || !areEqualSets(st.keys, cur)) {
      themeManager?.track(st.uuid, st.keys)
    }
  })

  return useMemo(() => {
    if (!theme) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('No theme', { themeName, theme, componentName, className })
      }
      return themes[getTamagui().defaultTheme || 'light' || Object.keys(themes)[0]]
    }
    return new Proxy(theme, {
      has(_, key) {
        if (typeof key === 'string') {
          if (key[0] === '$') {
            key = key.slice(1)
          }
        }
        return Reflect.has(theme, key)
      },
      get(_, key) {
        if (!name) {
          return Reflect.get(_, key)
        }
        // TODO make this pattern better
        if (key === GetThemeManager) {
          if (!didChangeTheme) {
            return null
          }
          // TODO
          // console.log('DID CHANGE THEME')
          return themeManager
        }
        if (key === 'name') {
          return name
        }
        if (key === 'className') {
          return className
        }
        let activeTheme = themes[name]
        if (!activeTheme) {
          if (process.env.NODE_ENV !== 'test') {
            // prettier-ignore
            console.error('No theme by name', name, 'keeping current theme')
          }
          activeTheme = theme
        }
        if (typeof key === 'string') {
          // auto convert variables to plain
          if (key[0] === '$') {
            key = key.slice(1)
          }
          if (key in activeTheme) {
            if (state.current.isRendering) {
              state.current.keys.add(key)
            }
            return activeTheme[key]
          }
          if (process.env.NODE_ENV === 'development') {
            console.warn(`No theme value "${String(key)}" in ${name}`)
            return null
          }
        }
        return Reflect.get(_, key)
      },
    })
  }, [name, theme, className, didChangeTheme])
}

const GetThemeManager = Symbol('GetThemeManager')

export const getThemeManager = (theme: any) => {
  return theme?.[GetThemeManager]
}

export const useThemeName = (opts?: { parent?: true }) => {
  const parent = useContext(ThemeManagerContext)
  const [name, setName] = useState(parent?.name || '')

  useIsomorphicLayoutEffect(() => {
    if (!parent) return
    return parent.onChangeTheme((next, manager) => {
      const name = opts?.parent ? manager.parentName || next : next
      if (!name) return
      setName(name)
    })
  }, [parent])

  return name
}

export const useDefaultThemeName = () => {
  return useContext(ThemeContext)?.defaultTheme
}

export const useChangeThemeEffect = (name?: string | null, componentName?: string, props?: any) => {
  const debug = props && props['debug']
  const parentManager = useContext(ThemeManagerContext) || emptyManager
  const { themes } = useContext(ThemeContext)!
  const next = parentManager.getNextTheme({ name, componentName, themes }, props)
  const forceUpdate = useForceUpdate()
  const themeManager = useConstant<ThemeManager | null>(() => {
    if (!next) {
      return null
    }
    return new ThemeManager(next.name, next.theme, parentManager)
  })

  if (typeof document !== 'undefined') {
    useLayoutEffect(() => {
      if (!themeManager) return
      if (next?.name) {
        themeManager.update({ ...next, parentManager })
      }
      return parentManager.onChangeTheme(() => {
        const next = parentManager.getNextTheme({ name, componentName, themes }, debug)
        if (!next) return
        if (themeManager.update({ ...next, parentManager })) {
          forceUpdate()
        }
      })
    }, [themes, name, componentName, debug, next?.name])
  }

  const didChangeTheme = next && parentManager && next.name !== parentManager.fullName

  return {
    ...(parentManager && {
      name: parentManager.name,
      theme: parentManager.theme,
    }),
    ...next,
    didChangeTheme,
    themes,
    themeManager,
  }
}
