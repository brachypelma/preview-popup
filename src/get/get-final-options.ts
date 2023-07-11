import {
  UserPreviewPopupOptions,
  FinalPreviewPopupOptions,
} from "../types";

export default function getFinalOptions(userOptions: UserPreviewPopupOptions) {
  const finalOptions: FinalPreviewPopupOptions = {
    events: ['click', 'focus', 'mouseover']
  }

  Object.keys(finalOptions).forEach((o) => {
    const opt = o as keyof UserPreviewPopupOptions
    if (userOptions[opt]) finalOptions[opt] = userOptions[opt]
  })

  return finalOptions
}
