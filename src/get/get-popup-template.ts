import { FinalPreviewPopupOptions } from "../types"

export default function getPopupTemplate(
  { htmlAboveIframe, htmlBelowIframe }: FinalPreviewPopupOptions
) {
  const template = document.createElement('template')
  
  template.classList.add('preview-popup-source')
  template.innerHTML = `
    <dialog class="preview-popup" id="preview-popup">
      ${htmlAboveIframe}
      <iframe class="preview-popup__iframe"></iframe>
      ${htmlBelowIframe}
    </dialog>`

  return template
}
