import addLinkListeners from "./add/add-link-listeners"
import getFinalOptions from "./get/get-final-options"
import { UserPreviewPopupOptions } from "./types"

export default function previewPopup(userOptions: UserPreviewPopupOptions = {}) {
  // Make sure we are in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  const previewable = document.querySelectorAll('a[data-use-preview-popup="true"]')
  
  if (!previewable?.length) return

  const options = getFinalOptions(userOptions)

  previewable.forEach(e => addLinkListeners(e as HTMLAnchorElement, options))
}
