import { MutableRefObject, useEffect } from 'react'

type DisposeFn = () => void

export const useOnIntersecting = (
  ref: MutableRefObject<HTMLElement | null>,
  cb: (props: IntersectionObserverEntry & { dispose?: DisposeFn | null }) => void | DisposeFn
) => {
  // arrow keys
  useEffect(() => {
    const node = ref.current
    if (!node) return
    // only when carousel is fully in viewport
    let dispose: DisposeFn | null = null

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispose =
            cb(
              new Proxy(entry, {
                get(target, key) {
                  if (key === 'dispose') {
                    return dispose
                  }
                  return Reflect.get(target, key)
                },
              })
            ) || null
        } else {
          dispose?.()
        }
      },
      {
        threshold: 1,
      }
    )

    io.observe(node)

    return () => {
      dispose?.()
      io.disconnect()
    }
  }, [ref.current])
}
