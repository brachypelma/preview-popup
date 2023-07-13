import { FinalPreviewPopupOptions } from "../types"
import getStyleTagInnerText from "./get-style-tag-inner-text"

export default function getStyleTag(options: FinalPreviewPopupOptions) {
  const style = document.createElement('style')

  style.setAttribute('id', 'preview-popup-css')
  style.innerText = (getStyleTagInnerText(options))

  return style
}
