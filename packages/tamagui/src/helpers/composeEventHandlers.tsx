export function composeEventHandlers<E>(
  ogEventHandler?: (event: E) => void,
  nextEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    ogEventHandler?.(event)
    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      return nextEventHandler?.(event)
    }
  }
}
