import setPopupPosition from "./set-popup-position"

export default function setPopupOpen(
  popup: HTMLDialogElement,
  href: string,
  size: number,
) {
  const iframe = popup.querySelector('.preview-popup__iframe')
  
  if (!iframe) return

  // Add customizable text to top of dialog
  setPopupPosition(popup, size)
  iframe.setAttribute('src', href)
  popup.show()
}
