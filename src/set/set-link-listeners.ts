import getCloseEvent from "../get/get-close-event"
import handlePreviewCloseEvent from "../handle/handle-preview-close.event"
import handlePreviewOpenEvent from "../handle/handle-preview-open-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  { events }: FinalPreviewPopupOptions,
  { content: { firstElementChild } }: HTMLTemplateElement
) {
  const id = firstElementChild?.getAttribute('id')

  if (!firstElementChild || !id) return

  events.forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewOpenEvent(firstElementChild, id)
    })
  })

  events.map(e => getCloseEvent(e)).forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewCloseEvent(id)
    })
  })
}
