import handleMouseMoveEvent from "../handle/handle-mouse-move-event";
import throttle from "../utils/throttle";

export default function setMouseMoveListener() {
  const trackMousePos = throttle((x: number, y: number) => {
    handleMouseMoveEvent(x, y)
  })

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    trackMousePos(clientX, clientY)
  })
}
