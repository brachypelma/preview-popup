import { FinalPreviewPopupOptions } from "../types"

export default function getStyleTag(options: FinalPreviewPopupOptions) {
  const {
    size,
    aspectRatio: { x, y },
    padding,
  } = options
  const { innerWidth } = window
  const style = document.createElement('style')
  const popupWidth = size > innerWidth ? innerWidth : size
  const iframeHeight = innerWidth * (y / x)
  const scale = popupWidth / innerWidth

  style.innerText = (`
    .preview-popup {
      aspect-ratio: ${x}/${y};
      inset: var(--y) auto auto var(--x);
      overflow: hidden;
      padding: ${padding}px;
      width: min(100%, ${popupWidth}px);
      z-index: 1;
    }
    
    .preview-popup::backdrop {
      background-color: rgba(0,0,0,0);
    }

    .preview-popup__iframe {
      aspect-ratio: ${x}/${y};
      border: none;
      width: ${innerWidth}px;
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
