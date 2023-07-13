export type PreviewPopupAspectRatio = { x: number, y: number }

export type UserPreviewPopupOptions = {
  size?: number,
  aspectRatio?: PreviewPopupAspectRatio,
  padding?: number,
}

export type FinalPreviewPopupOptions = {
  size: number,
  aspectRatio: PreviewPopupAspectRatio,
  padding: number,
}
