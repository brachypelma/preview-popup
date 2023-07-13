export default function debounce(
  cb: CallableFunction,
  delay = 250,
) {
  let timeout: NodeJS.Timeout|undefined

  return (...args: any) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
