export default function getPopupCoordinate(
  mouseCoord: number,
  popupDimension: number,
  windowLimit: number,
) {
  console.log(mouseCoord, popupDimension, windowLimit)

  return ((mouseCoord + popupDimension) > windowLimit)
    ? (windowLimit - popupDimension)
    : mouseCoord
}
