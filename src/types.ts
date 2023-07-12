export type PreviewPopupOpenEvent = 'mouseover'|'focus'
export type PreviewPopupCloseEvent = 'mouseout'|'blur'

export type UserPreviewPopupOptions = {
  events?: PreviewPopupOpenEvent[],
  size?: number,
  aspectRatio?: {
    x: number,
    y: number,
  },
  padding?: number,
}

export type FinalPreviewPopupOptions = {
  events: PreviewPopupOpenEvent[],
  size: number,
  aspectRatio: {
    x: number,
    y: number,
  },
  padding: number,
}
