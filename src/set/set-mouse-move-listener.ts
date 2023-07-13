import { FinalPreviewPopupOptions } from "../types";
import throttle from "../utils/throttle";
import setPopupPosition from "./set-popup-position";

export default function setMouseMoveListener(
  { size, aspectRatio }: FinalPreviewPopupOptions,
) {
  const updateMousePos = throttle((clientX: number, clientY: number) => {
    setPopupPosition(clientX, clientY, size, aspectRatio)
  })

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    updateMousePos(clientX, clientY)
  })
}
