export type PreviewPopupCallback = (...args: any[]) => any

export type UserPreviewPopupOptions = {
  size?: number,
  aspectRatio?: {
    x: number,
    y: number,
  },
  padding?: number,
  htmlAboveIframe?: string,
  htmlBelowIframe?: string,
  beforeOpen?: PreviewPopupCallback,
  afterOpen?: PreviewPopupCallback,
  beforeClose?: PreviewPopupCallback,
  afterClose?: PreviewPopupCallback,
}

export type FinalPreviewPopupOptions = {
  size: number,
  aspectRatio: {
    x: number,
    y: number,
  },
  padding: number,
  htmlAboveIframe: string,
  htmlBelowIframe: string,
  beforeOpen?: PreviewPopupCallback,
  afterOpen?: PreviewPopupCallback,
  beforeClose?: PreviewPopupCallback,
  afterClose?: PreviewPopupCallback,
}
