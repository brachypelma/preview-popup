import { FinalPreviewPopupOptions } from "../types"

export default function getStyleTag(options: FinalPreviewPopupOptions) {
  const {
    size,
    aspectRatio: { x, y },
    padding,
  } = options
  const style = document.createElement('style')

  style.innerText = (`
    .preview-popup {
      aspect-ratio: ${x}/${y};
      background-color: rgba(0,0,0,0);
      padding: ${padding}px;
      width: min(100%, ${size}px);
      z-index: 1;
    }
  `)

  return style
}
