import addLinkListeners from "./add/add-link-listeners"
import getFinalOptions from "./get/get-final-options"
import getPopupTemplate from "./get/get-popup-template"
import getStyleTag from "./get/get-style-tag"
import { UserPreviewPopupOptions } from "./types"

export default function previewPopup(userOptions: UserPreviewPopupOptions = {}) {
  // Make sure we are in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  const previewable = document.querySelectorAll('a[data-use-preview-popup="true"]')
  
  if (!previewable?.length) return

  const options = getFinalOptions(userOptions)
  const style = getStyleTag()
  const template = getPopupTemplate()

  document.body.append(style, template)

  previewable.forEach(e => {
    addLinkListeners(e as HTMLAnchorElement, options, template)
  })
}
