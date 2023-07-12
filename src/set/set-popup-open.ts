export default function setPopupOpen(
  popup: HTMLDialogElement,
  href: string,
) {
  const iframe = popup.querySelector('.preview-popup__iframe')
  
  if (!iframe) return

  // Position popup based on mouse position/document boundaries
  // Add customizable text to top of dialog

  iframe.setAttribute('src', href)
  popup.show()
}
