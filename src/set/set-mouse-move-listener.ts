import throttle from "../utils/throttle";

export default function setMouseMoveListener() {
  const logMousePos = throttle((x: number, y: number) => {
    console.log(x, y)
  })

  window.addEventListener('mousemove', ({ clientX, clientY }) => {
    logMousePos(clientX, clientY)
  })
}
