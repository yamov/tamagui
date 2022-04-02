import '../app.css'

import { DocsPage } from '@components/DocsPage'
import { Footer } from '@components/Footer'
import * as NextThemes from '@components/NextTheme'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { PopoverProvider, SafeAreaProvider, YStack } from 'tamagui'

import { SearchProvider } from '../components/Search'
import Tamagui from '../tamagui.config'

globalThis['React'] = React
Error.stackTraceLimit = Infinity

const isChrome =
  typeof document !== 'undefined' &&
  process.env.NODE_ENV === 'development' &&
  /Chrome/.test(navigator.userAgent) &&
  /Google Inc/.test(navigator.vendor)
if (isChrome) {
  // log out CSS for debugging
  const blocks = Tamagui.getCSS().split('}\n')
  console.groupCollapsed('CSS')
  for (const block of blocks) {
    const title = block.slice(0, block.indexOf('{')).split(', ').join('\n')
    console.groupCollapsed(title)
    console.log(block)
    console.groupEnd()
  }
  console.groupEnd()
}

export default function App(props: AppProps) {
  const classes = typeof document !== 'undefined' ? [...document.documentElement.classList] : []
  const isDark = classes.includes('tui_dark')
  const [theme, setTheme] = useState(isDark ? 'dark' : 'light')

  const contents = useMemo(() => {
    return (
      <SearchProvider>
        <SafeAreaProvider>
          <PopoverProvider>
            <ContentInner {...props} />
          </PopoverProvider>
        </SafeAreaProvider>
      </SearchProvider>
    )
  }, [props])

  // cant do system them because next SSR
  return (
    <NextThemes.ThemeProvider
      enableSystem
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{
        dark: 'tui_dark',
        light: 'tui_light',
      }}
      onChangeTheme={(x) => setTheme(x.replace('tui_', ''))}
    >
      <Tamagui.Provider disableRootThemeClass defaultTheme={theme}>
        {contents}
      </Tamagui.Provider>
    </NextThemes.ThemeProvider>
  )
}

function ContentInner({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isDocs = router.pathname.includes('/docs')
  return (
    <YStack>
      {isDocs ? (
        <DocsPage>
          <Component {...pageProps} />
        </DocsPage>
      ) : (
        <Component {...pageProps} />
      )}
      {!isDocs && <Footer />}
    </YStack>
  )
}
