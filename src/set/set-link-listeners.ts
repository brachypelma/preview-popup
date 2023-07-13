import getCloseEvent from "../get/get-close-event"
import handlePreviewCloseEvent from "../handle/handle-preview-close.event"
import handlePreviewOpenEvent from "../handle/handle-preview-open-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  previewable: NodeListOf<Element>,
  { events, size }: FinalPreviewPopupOptions,
  { content: { firstElementChild } }: HTMLTemplateElement
) {
  const dialog = firstElementChild?.tagName === 'DIALOG'
    ? firstElementChild as HTMLDialogElement
    : false
  const href = link.getAttribute('href')
  const id = firstElementChild?.getAttribute('id')

  if (!dialog || !href || !id) return

  events.forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewOpenEvent(dialog, href, id, previewable, size)
    })
  })

  events.map(e => getCloseEvent(e)).forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewCloseEvent(id, link)
    }
  )})
}
