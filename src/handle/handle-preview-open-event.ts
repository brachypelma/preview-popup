import appendPopup from "../append/append-popup"
import setPopupOpen from "../set/set-popup-open"

export default function handlePreviewOpenEvent(
  dialog: HTMLDialogElement,
  href: string,
  id: string,
  timeout: NodeJS.Timeout|false
) {
  const popup = document.querySelector(`#${id}`) as HTMLDialogElement

  console.log(`handlePreviewOpenEvent`)

  if (popup) setPopupOpen(popup, href)
  else appendPopup(dialog, href)

  if (timeout) clearTimeout(timeout)
}
