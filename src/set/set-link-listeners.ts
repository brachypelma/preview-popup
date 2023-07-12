import getCloseEvent from "../get/get-close-event"
import handlePreviewCloseEvent from "../handle/handle-preview-close.event"
import handlePreviewOpenEvent from "../handle/handle-preview-open-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  { events }: FinalPreviewPopupOptions,
  { content: { firstElementChild } }: HTMLTemplateElement
) {
  const href = link.getAttribute('href')
  const id = firstElementChild?.getAttribute('id')

  if (!firstElementChild || !href || !id) return

  events.forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewOpenEvent(firstElementChild, href, id)
    })
  })

  events.map(e => getCloseEvent(e)).forEach(e => {
    link.addEventListener(e, () => setTimeout(() => {
      handlePreviewCloseEvent(id)
    }, 200)
  )})
}
