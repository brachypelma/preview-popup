export default function getPopupTemplate() {
  const template = document.createElement('template')
  template.classList.add('preview-popup-source')

  const dialog = document.createElement('dialog')
  dialog.classList.add('preview-popup')
  
  const iframe = document.createElement('iframe')
  iframe.classList.add('preview-popup__iframe')

  dialog.appendChild(iframe)
  template.appendChild(dialog)

  return template
}
