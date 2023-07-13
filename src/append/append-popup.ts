import setPopupOpen from "../set/set-popup-open"

export default function appendPopup(
  dialog: HTMLDialogElement,
  href: string,
  size: number,
) {
  const popup = dialog.cloneNode(true) as HTMLDialogElement

  document.body.appendChild(popup)
  setPopupOpen(popup, href, size)
}
