export default interface Button {
  btnCss?: string;
  btnImage?: {
    icon: string;
    altText: string;
    imgCss: string;
  };
  processing?: boolean;
  btnTxt?: string;
}
