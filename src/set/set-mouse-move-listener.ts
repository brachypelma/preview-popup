import throttle from "../utils/throttle";
import setPopupPosition from "./set-popup-position"

export default function setMouseMoveListener() {
  const updateMousePos = throttle((clientX: number, clientY: number) => {
    setPopupPosition(clientX, clientY)
  })

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    updateMousePos(clientX, clientY)
  })
}
