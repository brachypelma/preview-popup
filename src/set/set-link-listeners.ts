import handlePreviewCloseEvent from "../handle/handle-preview-close.event"
import handlePreviewOpenEvent from "../handle/handle-preview-open-event"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  previewable: NodeListOf<Element>,
  { content: { firstElementChild } }: HTMLTemplateElement
) {
  const dialog = firstElementChild?.tagName === 'DIALOG'
    ? firstElementChild as HTMLDialogElement
    : false
  const href = link.getAttribute('href')
  const id = firstElementChild?.getAttribute('id')

  if (!dialog || !href || !id) return

  link.addEventListener('mouseenter', () => {
    handlePreviewOpenEvent(dialog, href, id, previewable)
  })
  
  link.addEventListener('mouseleave', () => {
    handlePreviewCloseEvent(id, link)
  })
}
