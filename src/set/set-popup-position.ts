import getMouseCoordinateNum from "../get/get-mouse-coordinate-num"
import getPopupCoordinate from "../get/get-popup-coordinate"
import { PreviewPopupAspectRatio } from "../types"

export default function setPopupPosition(
  popup: HTMLDialogElement,
  size: number,
  { y }: PreviewPopupAspectRatio,
) {
  const mouseX = getMouseCoordinateNum(popup, 'x')
  const mouseY = getMouseCoordinateNum(popup, 'y')
  const popupX = getPopupCoordinate(mouseX, size, innerWidth)
  const popupY = getPopupCoordinate(mouseY, (size * y), innerHeight)

  popup.setAttribute('style', `--x: ${popupX}; --y: ${popupY}`)
}
