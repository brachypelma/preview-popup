export default function setPopupOpen(
  popup: HTMLDialogElement,
  href: string,
) {
  const iframe = popup.querySelector('.preview-popup__iframe')

  if (!iframe) return

  // Position popup based on mouse position/document boundaries

  iframe.setAttribute('src', href)
  popup.showModal()
}
