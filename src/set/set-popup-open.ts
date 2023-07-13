export default function setPopupOpen(
  popup: HTMLDialogElement,
  href: string,
) {
  const iframe = popup.querySelector('.preview-popup__iframe')
  
  if (!iframe) return

  // Add customizable text to top of dialog
  iframe.setAttribute('src', href)

  if (!popup.getAttribute('style')) window.dispatchEvent(new Event('mousemove'))

  popup.show()
}
