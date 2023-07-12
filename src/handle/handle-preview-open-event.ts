import appendPopup from "../append/append-popup"
import setPopupSrc from "../set/set-popup-src"

export default function handlePreviewOpenEvent(
  firstElementChild: Element,
  href: string,
  id: string,
) {
  const popup = document.querySelector(`#${id}`)

  if (popup) setPopupSrc(popup, href)
  else appendPopup(firstElementChild, href)
}
