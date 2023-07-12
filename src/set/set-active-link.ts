export default function setActiveLink(
  href: string,
  previewable: NodeListOf<Element>,
) {
  previewable.forEach(link => {
    link.setAttribute('data-is-active', `${(link.getAttribute('href') === href)}`)
  })
}
