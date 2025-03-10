import React,{useState,useEffect} from 'react';

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

export const IconButton: React.FC<IconButtonProps> = ({ onClick = () => {}, className = 'bg-transparent', iconWidth, btnWidth,btnHeight,padding, image,btnTitle,btnRadius, iconWidthPhone, btnWidthPhone,btnHeightPhone,paddingPhone, btnRadiusPhone, }) => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
      // Set initial width
      setScreenWidth(window.innerWidth);
  
      // Handle window resize
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
        <button onClick={()=>{onClick}}
            style={(screenWidth ?? 0) > 768 ? { width: `${btnWidth}vw`, height: `${btnHeight}vw`, padding: `${padding}vw`, borderRadius: `${btnRadius}vw` } : { width: `${btnWidthPhone}vw`, height: `${btnHeightPhone}vw`, padding: `${paddingPhone}vw`, borderRadius: `${btnRadiusPhone}vw` }}
            className={`mr-0 pr-0 border-orangeChosen border-[1px] border-solid  flex justify-end items-center rounded-full text-orangeChosen ${className}`}> 
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
  btnWidthPhone: number;
  btnHeightPhone: number;
  btnRadiusPhone: number;
}

  
  export const TitleButton:React.FC<TitleButtonProps> = ({ onClick={}, className = '', btnTitle, btnWidth, btnHeight,btnRadius, className2='', btnWidthPhone, btnHeightPhone,btnRadiusPhone }) => {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
      // Set initial width
      setScreenWidth(window.innerWidth);
  
      // Handle window resize
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array ensures this runs once on mount
  
    return (
        <button
        onClick={()=>{onClick}}
        className={`group bg-orangeChosen dark:bg-orangeChosen  text-white  ${className}`}
        style={(screenWidth ?? 0) > 768 ? {
          width: `${btnWidth}vw`,
          height: `${btnHeight}vw`,
          borderRadius: `${btnRadius}vw`
        }:{
          width: `${btnWidthPhone}vw`,
          height: `${btnHeightPhone}vw`,
          borderRadius: `${btnRadiusPhone}vw`
        }}
      >
        <span className={`text-smallTextPhone md:text-smallText text-center font-poppins ${className2}`} >
          {btnTitle}
        </span>
      </button>
    );
  };


