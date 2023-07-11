export default function getStyleTag() {
  const style = document.createElement('style')

  style.innerText = (`
    .preview-popup {
      background-color: rgba(0,0,0,0);
      width: min(100%, 60rem);
      z-index: 1;
    }
  `)

  return style
}
