export default function setPopupOpen(
  popup: HTMLDialogElement,
  href: string,
) {
  const iframe = popup.querySelector('.preview-popup__iframe')

  if (!iframe) return
  
  iframe.setAttribute('src', href)
  popup.showModal()
}
