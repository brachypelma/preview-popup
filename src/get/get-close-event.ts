import { PreviewPopupOpenEvent, PreviewPopupCloseEvent } from "../types";

export default function getCloseEvent(
  event: PreviewPopupOpenEvent
): PreviewPopupCloseEvent {
  switch (event) {
    case 'mouseover': return 'mouseout'
    case 'focus':     return 'blur'
    default:          return 'mouseout'
  }
}
