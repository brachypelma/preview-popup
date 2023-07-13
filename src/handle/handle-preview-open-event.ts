import appendPopup from "../append/append-popup"
import setActiveLink from "../set/set-active-link"
import setPopupOpen from "../set/set-popup-open"

export default function handlePreviewOpenEvent(
  dialog: HTMLDialogElement,
  href: string,
  id: string,
  previewable: NodeListOf<Element>,
  size: number,
) {
  const popup = document.querySelector(`#${id}`) as HTMLDialogElement

  if (popup) setPopupOpen(popup, href, size)
  else appendPopup(dialog, href, size)

  setActiveLink(href, previewable)
}
