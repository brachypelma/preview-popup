import getFinalOptions from "./get/get-final-options"
import getPopupTemplate from "./get/get-popup-template"
import getStyleTag from "./get/get-style-tag"
import setLinkListeners from "./set/set-link-listeners"
import setMouseMoveListener from "./set/set-mouse-move-listener"
import { UserPreviewPopupOptions } from "./types"

export default function previewPopup(userOptions: UserPreviewPopupOptions = {}) {
  // Make sure we are in a browser environment
  if (typeof window === 'undefined') return

  const previewable = document?.querySelectorAll('a[data-use-preview-popup="true"]')
  
  if (!previewable?.length) return

  const options = getFinalOptions(userOptions)
  const style = getStyleTag(options)
  const template = getPopupTemplate()

  document.body.append(style, template)

  setMouseMoveListener()

  previewable.forEach(e => {
    setLinkListeners(e as HTMLAnchorElement, previewable, options, template)
  })
}
