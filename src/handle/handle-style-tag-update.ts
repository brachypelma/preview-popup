import getStyleTagInnerText from "../get/get-style-tag-inner-text";
import { FinalPreviewPopupOptions } from "../types";

export default function handleStyleTagUpdate(options: FinalPreviewPopupOptions) {
  const style = document.querySelector('#preview-popup-css') as HTMLStyleElement
  
  if (style) style.innerText = getStyleTagInnerText(options)
}