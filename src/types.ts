export type PreviewPopupOpenEvent = 'mouseover'|'focus'
export type PreviewPopupCloseEvent = 'mouseout'|'blur'
export type PreviewPopupAspectRatio = { x: number, y: number }

export type UserPreviewPopupOptions = {
  events?: PreviewPopupOpenEvent[],
  size?: number,
  aspectRatio?: PreviewPopupAspectRatio,
  padding?: number,
}

export type FinalPreviewPopupOptions = {
  events: PreviewPopupOpenEvent[],
  size: number,
  aspectRatio: PreviewPopupAspectRatio,
  padding: number,
}
