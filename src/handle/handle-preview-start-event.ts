export default function handlePreviewStartEvent(
  { content: { firstElementChild } }: HTMLTemplateElement
) {
  const canAppend = (
    firstElementChild &&
    !document.querySelector(`#${firstElementChild.getAttribute('id')}`)
  )

  if (!canAppend) return

  document.body.append(firstElementChild.cloneNode(true))
}
