import handleWindowKeyEvent from "../handle/handle-window-key-event";

export default function setWindowKeyEvents() {
  document.addEventListener('keyup', ({ key }) => handleWindowKeyEvent(key))
}
