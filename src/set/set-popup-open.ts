import { PreviewPopupAspectRatio } from "../types"
import setPopupPosition from "./set-popup-position"

export default function setPopupOpen(
  popup: HTMLDialogElement,
  href: string,
  size: number,
  aspectRatio: PreviewPopupAspectRatio,
) {
  const iframe = popup.querySelector('.preview-popup__iframe')
  
  if (!iframe) return

  // Add customizable text to top of dialog
  setPopupPosition(popup, size, aspectRatio)
  iframe.setAttribute('src', href)
  popup.show()
}
