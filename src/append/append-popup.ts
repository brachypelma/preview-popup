import setPopupOpen from "../set/set-popup-open"
import { PreviewPopupAspectRatio } from "../types"

export default function appendPopup(
  dialog: HTMLDialogElement,
  href: string,
  size: number,
  aspectRatio: PreviewPopupAspectRatio,
) {
  const popup = dialog.cloneNode(true) as HTMLDialogElement

  document.body.appendChild(popup)
  setPopupOpen(popup, href, size, aspectRatio)
}
