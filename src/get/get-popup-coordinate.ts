export default function getPopupCoordinate(
  mouseCoord: number,
  popupDimension: number,
  windowLimit: number,
) {
  return (mouseCoord + popupDimension) > windowLimit
    ? windowLimit - popupDimension + 16
    : mouseCoord + 16
}
