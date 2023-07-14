import { PreviewPopupCallback } from "../types";

export default function callCb(cb: PreviewPopupCallback|undefined) {
  if (typeof cb !== 'undefined') cb()
}
