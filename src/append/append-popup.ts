import setPopupOpen from "../set/set-popup-open"

export default function appendPopup(
  dialog: HTMLDialogElement,
  href: string,
) {
  const popup = dialog.cloneNode(true) as HTMLDialogElement

  document.body.append(popup)
  setPopupOpen(popup, href)
}
