export default function setPopupSrc(popup: Element, href: string) {
  const iframe = popup.querySelector('.preview-popup__iframe')
  if (iframe) iframe.setAttribute('src', href)
}
