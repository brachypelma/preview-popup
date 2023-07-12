export default function handlePreviewOpenEvent(id: string) {
  console.log(`handlePreviewCloseEvent, ${new Date().getTime()}`)

  const popup = document.querySelector(`#${id}`)
  if (popup) document.body.removeChild(popup)
}
