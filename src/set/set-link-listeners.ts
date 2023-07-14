import callHookFunc from "../call/call-hook-func"
import handlePreviewCloseEvent from "../handle/handle-preview-close.event"
import handlePreviewOpenEvent from "../handle/handle-preview-open-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  options: FinalPreviewPopupOptions,
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
    if (options.beforeOpen) callHookFunc(options.beforeOpen)
    handlePreviewOpenEvent(dialog, href, id, previewable)
  })
  
  link.addEventListener('mouseleave', () => {
    handlePreviewCloseEvent(id, link)
  })
}
