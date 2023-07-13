export default function getMouseCoordinateNum(
  popup: HTMLDialogElement,
  coordinate: string,
) {
  const attrVal = popup.getAttribute(`data-mouse-${coordinate}`) ?? '0'
  const valNum = parseInt(attrVal)

  return isNaN(valNum) ? 0 : valNum
}
