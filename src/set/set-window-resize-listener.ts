import throttle from "../utils/throttle";
import { FinalPreviewPopupOptions } from "../types";
import handleStyleTagUpdate from "../handle/handle-style-tag-update";

export default function setWindowResizeListener(options: FinalPreviewPopupOptions) {
  const updatePopupStyleTagInnerText = throttle(() => handleStyleTagUpdate(options))

  window.addEventListener('resize', () => {
    updatePopupStyleTagInnerText()
  })
}
