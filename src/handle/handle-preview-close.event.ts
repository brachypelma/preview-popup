export default function handlePreviewCloseEvent(
  id: string,
  link: HTMLAnchorElement,
) {
  const popup = document.querySelector(`#${id}`)

  link.setAttribute('data-is-active', 'false')

  setTimeout(() => {
    const isNoLinkActive = !document.querySelector('a[data-is-active="true"]')
    if (popup && isNoLinkActive) document.body.removeChild(popup)
  }, 500)
}
