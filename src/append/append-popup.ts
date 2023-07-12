import setPopupSrc from "../set/set-popup-src"

export default function appendPopup(
  firstElementChild: Element,
  href: string,
) {
  const popup = firstElementChild.cloneNode(true) as Element

  document.body.append(popup)
  setPopupSrc(popup, href)
}
