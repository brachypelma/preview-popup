export default function handleMouseMoveEvent(x: number, y: number) {
  const popup = document.querySelector('#preview-popup')
  
  if (!popup) return

  popup.setAttribute('data-mouse-x', `${x}`)
  popup.setAttribute('data-mouse-y', `${y}`)
}
