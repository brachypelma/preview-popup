import handlePreviewStartEvent from "../handle/handle-preview-start-event"
import { FinalPreviewPopupOptions } from "../types"

export default function setLinkListeners(
  link: HTMLAnchorElement,
  options: FinalPreviewPopupOptions,
  template: HTMLTemplateElement,
) {
  const { events } = options

  if (!events.length) return

  events.forEach(e => {
    link.addEventListener(e, () => {
      handlePreviewStartEvent(e, options)
    })
  })

  console.log(template)
}
