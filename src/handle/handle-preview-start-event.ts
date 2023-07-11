import {
  FinalPreviewPopupOptions,
  PreviewPopupEvent,
} from "../types";

export default function handlePreviewStartEvent(
  event: PreviewPopupEvent,
  options: FinalPreviewPopupOptions,
) {
  console.log(event)
  console.log(options)
}
