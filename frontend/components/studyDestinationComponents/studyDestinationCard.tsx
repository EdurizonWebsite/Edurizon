import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { TransitionLink } from '@/utils/TransitionLink';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface ActionAreaCardProps {
  category: string;
  image: string | StaticImport;
  title: string;
  description: string;
  href: string;
}

export default function ActionAreaCard({ category, image, title, description, href }: ActionAreaCardProps) {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TransitionLink href={href}>
    <div className='shadow-[3px_4px_4px_rgba(0,_0,_0,_0.25)] md:rounded-[1.875vw] overflow-hidden dark:shadow-[2px_3px_14.3px_rgba(255,_255,_255,_0.25)]'  style={{ maxWidth:innerWidth>768? 416:300,borderRadius: innerWidth>768? '16px':'8px' }}>
      <CardActionArea className='bg-black' > 
        <Image src={image} alt={title} width={140} height={140} layout='responsive' className='max-h-[300px] md:max-h-[250px] overflow-hidden' />
          <div  className=' dark:bg-black text-black dark:text-white font-roboto pt-[12px] md:pt-[24px] pb-[8px] md:pb-[12px] px-[8px] flex flex-col gap-[8px]'>
          <span className=' font-bold text-[12px] md:text-[14px] '>
            {category}
            </span>
            <h2 className='font-poppins font-bold text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] md:overflow-hidden md:text-nowrap text-ellipsis '>{title}</h2>
          <p className='text-[12px] md:text-[14px] xl:text-[16px] md:max-h-[60px] lg:max-h-[96px] overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-3 lg:line-clamp-4' >{description}</p>
          <span className='text-right pr-[12px]   text-[10px] md:text-[12px] '>Learn More</span>
          </div>
      </CardActionArea>
    </div>
    </TransitionLink>
  );
}