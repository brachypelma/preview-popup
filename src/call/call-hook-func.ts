import { PreviewPopupCallback } from "../types";

export default function callHookFunc(cb: PreviewPopupCallback) {
  return (...args: any) => cb(args)
}
