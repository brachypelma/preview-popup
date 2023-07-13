export default function throttle(
  cb: CallableFunction,
  delay = 100,
) {
  let shouldWait = false

  return (...args: any) => {
    if (shouldWait) return

    cb(...args)
    shouldWait = true
    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}
