import { FinalPreviewPopupOptions } from "../types"

export default function getStyleTag(options: FinalPreviewPopupOptions) {
  const {
    size,
    aspectRatio: { x, y },
    padding,
  } = options
  const style = document.createElement('style')
  const iframeHeight = 1200 * (y / x)
  const scale = size / 1200

  style.innerText = (`
    .preview-popup {
      aspect-ratio: ${x}/${y};
      inset: var(--y) auto auto var(--x);
      overflow: hidden;
      padding: ${padding}px;
      width: min(100%, ${size}px);
      z-index: 1;
    }
    
    .preview-popup::backdrop {
      background-color: rgba(0,0,0,0);
    }

    .preview-popup__iframe {
      aspect-ratio: ${x}/${y};
      border: none;
      width: 1200px;
      height: ${iframeHeight}px;
      overflow: hidden;
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
