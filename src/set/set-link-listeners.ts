import handlePreviewCloseEvent from "../handle/handle-preview-close.event"
import handlePreviewOpenEvent from "../handle/handle-preview-open-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  { beforeOpen, afterOpen, beforeClose, afterClose }: FinalPreviewPopupOptions,
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
    beforeOpen()
    handlePreviewOpenEvent(dialog, href, id, previewable)
    afterOpen()
  })
  
  link.addEventListener('mouseleave', () => {
    beforeClose()
    handlePreviewCloseEvent(id, link)
    afterClose()
  })
}
