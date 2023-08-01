import { images }  from "./../../constants"

interface iEventButton {
  btnCss?: string;
  btnImage?: {
    icon: string;
    altText: string;
    imgCss: string;
  };
  processing?: boolean;
  btnTxt?: string;
  handleOnClick: () => void;
}

export default function EventButton({
  btnCss,
  btnImage,
  btnTxt,
  processing,
  handleOnClick,
}: iEventButton) {
  return (
    <button onClick={() => handleOnClick()} className={btnCss}>
      {btnImage ? (
        <img
          src={btnImage.icon}
          alt={btnImage.altText}
          className={btnImage.imgCss}
        />
      ) : (
        ""
      )}
      {
      processing ? <img src={images.processingGif} alt="Processing Gif" width="20"/> 
      : btnTxt ? btnTxt 
      : ""
      }
    </button>
  );
}
