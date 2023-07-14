import { FinalPreviewPopupOptions } from "../types";

export default function getStyleTagInnerText(options: FinalPreviewPopupOptions) {
  const {
    size,
    aspectRatio: { x, y },
    padding,
  } = options
  const { innerWidth } = window
  const popupWidth = size > innerWidth ? innerWidth : size
  const scale = popupWidth / innerWidth
  const iframeHeight = (1 / scale) * 100

  return `
    .preview-popup {
      aspect-ratio: ${x}/${y};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      inset: var(--y) auto auto var(--x);
      overflow: hidden;
      padding: ${padding}px;
      width: min(100%, ${popupWidth}px);
    }

    .preview-popup::backdrop {
      background-color: rgba(0,0,0,0);
    }

    .preview-popup__iframe-container {
      flex: 1;
    }

    .preview-popup__iframe {
      border: none;
      width: ${innerWidth}px;
      height: ${iframeHeight}%;
      overflow: hidden;
      -ms-zoom: ${scale};
      -moz-transform: scale(${scale});
      -moz-transform-origin: 0 0;
      -o-transform: scale(${scale});
      -o-transform-origin: 0 0;
      -webkit-transform: scale(${scale});
      -webkit-transform-origin: 0 0;
    }
  `
}
