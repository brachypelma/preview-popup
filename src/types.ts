export type PreviewPopupEvent = 'mouseover'|'focus'|'click'

export type UserPreviewPopupOptions = {
  events?: PreviewPopupEvent[]
}

export type FinalPreviewPopupOptions = {
  events: PreviewPopupEvent[]
}
