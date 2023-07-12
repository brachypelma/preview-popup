import { FinalPreviewPopupOptions } from "../types"

export default function getStyleTag(options: FinalPreviewPopupOptions) {
  const {
    size,
    aspectRatio: { x, y },
    padding,
  } = options
  const style = document.createElement('style')
  const iframeHeight = 1200 * (x / y)
  const scale = (size - (padding * 2)) / 1200

  style.innerText = (`
    .preview-popup {
      aspect-ratio: ${x}/${y};
      background-color: rgba(0,0,0,0);
      padding: ${padding}px;
      width: min(100%, ${size}px);
      z-index: 1;
    }
    .preview-popup__iframe {
      aspect-ratio: ${x}/${y};
      border: none;
      width: 1200px;
      height: ${iframeHeight}px;
      -ms-zoom: ${scale};
      -moz-transform: scale(${scale});
      -moz-transform-origin: 0 0;
      -o-transform: scale(${scale});
      -o-transform-origin: 0 0;
      -webkit-transform: scale(${scale});
      -webkit-transform-origin: 0 0;
    }
  `)

  return style
}
