export default function getPopupCoordinate(
  mouseCoord: number,
  popupDimension: number,
  windowLimit: number,
) {
  return ((mouseCoord + popupDimension) > windowLimit)
    ? (windowLimit - popupDimension)
    : mouseCoord
}
