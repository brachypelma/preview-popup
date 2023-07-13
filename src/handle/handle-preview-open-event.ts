import appendPopup from "../append/append-popup"
import setActiveLink from "../set/set-active-link"
import setPopupOpen from "../set/set-popup-open"
import { PreviewPopupAspectRatio } from "../types"

export default function handlePreviewOpenEvent(
  dialog: HTMLDialogElement,
  href: string,
  id: string,
  previewable: NodeListOf<Element>,
  size: number,
  aspectRatio: PreviewPopupAspectRatio,
) {
  const popup = document.querySelector(`#${id}`) as HTMLDialogElement

  if (popup) setPopupOpen(popup, href, size, aspectRatio)
  else appendPopup(dialog, href, size, aspectRatio)

  setActiveLink(href, previewable)
}
