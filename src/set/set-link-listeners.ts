import handlePreviewStartEvent from "../handle/handle-preview-start-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  { events }: FinalPreviewPopupOptions,
  template: HTMLTemplateElement,
) {
  events.forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewStartEvent(template)
    })
  })
}
