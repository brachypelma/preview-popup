export default function handlePreviewOpenEvent(
  firstElementChild: Element,
  id: string,
) {
  if (!document.querySelector(`#${id}`)) return
  document.body.append(firstElementChild.cloneNode(true))
}
