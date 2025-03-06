import React,{useState,useEffect} from 'react';
import Image from 'next/image';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  iconWidth?: number;
  btnWidth?: number;
  btnHeight?: number;
  padding?: number;
  image: string;
  btnTitle: string;
  btnRadius?: number;
  iconWidthPhone?: number;
  btnWidthPhone?: number;
  btnHeightPhone?: number;
  paddingPhone?: number;
  btnRadiusPhone?: number;


}

export const IconButton: React.FC<IconButtonProps> = ({ onClick = () => {}, className = '', iconWidth, btnWidth,btnHeight,padding, image,btnTitle,btnRadius, iconWidthPhone, btnWidthPhone,btnHeightPhone,paddingPhone, btnRadiusPhone, }) => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Set initial width and update on resize
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  })
  return (
        <button onClick={()=>{onClick}}
            style={(screenWidth ?? 0) > 768 ? { width: `${btnWidth}vw`, height: `${btnHeight}vw`, padding: `${padding}vw`, borderRadius: `${btnRadius}vw` } : { width: `${btnWidthPhone}vw`, height: `${btnHeightPhone}vw`, padding: `${paddingPhone}vw`, borderRadius: `${btnRadiusPhone}vw` }}
            className={`bg-transparent mr-0 pr-0 border-orangeChosen border-[1px] border-solid  flex justify-end items-center rounded-full text-orangeChosen ${className}`}> 
            <p className='text-center  pr-[.625vw]  font-poppins'>{btnTitle}</p>
            <img alt='iconImage' src={image} style={(screenWidth ?? 0) > 768 ? { width: `${iconWidth}vw` } : { width: `${iconWidthPhone}vw` }} />
        </button>
    );
};


interface TitleButtonProps {
  onClick?: () => void;
  className?: string;
  btnTitle: string;
  btnWidth: number;
  btnHeight: number;
  btnRadius: number;
  className2?: string;
}

  
  export const TitleButton:React.FC<TitleButtonProps> = ({ onClick={}, className = '', btnTitle, btnWidth, btnHeight,btnRadius, className2='' }) => {
    return (
        <button
        onClick={()=>{onClick}}
        className={`group bg-orangeChosen dark:bg-orangeChosen  text-white  ${className}`}
        style={{
          width: `${btnWidth}vw`,
          height: `${btnHeight}vw`,
          borderRadius: `${btnRadius}vw`
        }}
      >
        <span className={`text-smallText text-center font-poppins ${className2}`} >
          {btnTitle}
        </span>
      </button>
    );
  };


