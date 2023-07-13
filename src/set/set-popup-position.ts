import getPopupCoordinate from "../get/get-popup-coordinate"

export default function setPopupPosition(clientX: number, clientY: number) {
  const popup = document.querySelector('#preview-popup') as HTMLDialogElement

  if (!popup) return

  const popupWidth = popup.offsetWidth
  const popupHeight = popup.offsetHeight
  const popupX = getPopupCoordinate(clientX, popupWidth, innerWidth)
  const popupY = getPopupCoordinate(clientY, popupHeight, innerHeight)

  popup.setAttribute('style', `--x: ${popupX}px; --y: ${popupY}px`)
}
