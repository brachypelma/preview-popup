import {
  UserPreviewPopupOptions,
  FinalPreviewPopupOptions,
} from "../types";

export default function getFinalOptions(
  userOptions: UserPreviewPopupOptions,
): FinalPreviewPopupOptions {
  return {
    size: 400,
    aspectRatio: {
      x: 4,
      y: 3,
    },
    padding: 16,
    htmlAboveIframe: '<p>Preview:</p>',
    htmlBelowIframe: '',
    beforeOpen: () => {},
    afterOpen: () => {},
    beforeClose: () => {},
    afterClose: () => {},
    ...userOptions,
  }
}
