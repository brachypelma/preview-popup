import { FinalPreviewPopupOptions } from "../types"

export default function getPopupTemplate(
  { htmlAboveIframe, htmlBelowIframe }: FinalPreviewPopupOptions
) {
  const template = document.createElement('template')
  
  template.classList.add('preview-popup-source')
  template.innerHTML = `
    <dialog class="preview-popup" id="preview-popup">
      <div class="preview-popup__inlet preview-popup__inlet--top">
        ${htmlAboveIframe}
      </div>
      <div class="preview-popup__iframe-container">
        <iframe class="preview-popup__iframe"></iframe>
      </div>
      <div class="preview-popup__inlet preview-popup__inlet--bottom">
        ${htmlBelowIframe}
      </div>
    </dialog>`

  return template
}
