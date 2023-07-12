export default function handlePreviewOpenEvent(id: string) {
  const popup = document.querySelector(`#${id}`)
  if (popup) document.body.removeChild(popup)
}
