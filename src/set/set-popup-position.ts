import getPopupCoordinate from "../get/get-popup-coordinate"
import { PreviewPopupAspectRatio } from "../types"

export default function setPopupPosition(
  clientX: number,
  clientY: number,
  size: number,
  { x, y }: PreviewPopupAspectRatio,
) {
  const popup = document.querySelector('#preview-popup') as HTMLDialogElement

  if (!popup) return

  const popupX = getPopupCoordinate(clientX + 16, size, innerWidth)
  const popupY = getPopupCoordinate(clientY + 16, (size * (x / y)), innerHeight)

  popup.setAttribute('style', `--x: ${popupX}px; --y: ${popupY}px`)
}
