export default function getPopupTemplate() {
  const template = document.createElement('template')
  
  template.classList.add('preview-popup-source')
  template.innerHTML = `
    <dialog class="preview-popup" id="preview-popup">
      <iframe class="preview-popup__iframe"></iframe>
    </dialog>`

  return template
}
