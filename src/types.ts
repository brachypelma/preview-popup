export type PreviewPopupEvent = 'mouseover'|'focus'

export type UserPreviewPopupOptions = {
  events?: PreviewPopupEvent[],
  size?: number,
  aspectRatio?: {
    x: number,
    y: number,
  },
  padding?: number,
}

export type FinalPreviewPopupOptions = {
  events: PreviewPopupEvent[],
  size: number,
  aspectRatio: {
    x: number,
    y: number,
  },
  padding: number,
}
