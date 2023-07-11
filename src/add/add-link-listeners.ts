import handlePreviewStartEvent from "../handle/handle-preview-start-event"
import { FinalPreviewPopupOptions } from "../types"

export default function addLinkListeners(
  link: HTMLAnchorElement,
  options: FinalPreviewPopupOptions
) {
  const { events } = options

  if (!events.length) return

  events.forEach(e => link.addEventListener(e, () => handlePreviewStartEvent(e)))
}
