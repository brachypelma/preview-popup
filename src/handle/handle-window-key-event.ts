export default function handleWindowKeyEvent(key: string) {
  const popup = document.querySelector('#preview-popup') as HTMLDialogElement

  console.log(key, popup)

  switch (key) {
    case 'Escape': return popup && popup.close()
    default: return
  }
}
