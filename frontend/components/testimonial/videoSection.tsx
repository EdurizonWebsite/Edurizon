import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const videoData = [
    {
      id: 1,
      title: 'Delhi Students Review | Study MBBS Abroad',
      channel: 'Edurizon Pvt Ltd',
      thumbnail: 'https://img.youtube.com/vi/ufv7rVtxZgI/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=ufv7rVtxZgI',
      state: "delhi"
    },
    {
      id: 2,
      title: "MBBS Abroad for Indian Students | Haryana Students Share Honest Reviews",
      channel: 'Edurizon Pvt Ltd',
      thumbnail: 'https://img.youtube.com/vi/MiJMbsJ8Efg/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=MiJMbsJ8Efg',
      state: "haryana"
    },
    // {
    //   id: 3,
    //   title: 'Rajasthan Students Review about MBBS in Russia',
    //   channel: 'Edurizon Pvt Ltd',
    //   thumbnail: 'https://img.youtube.com/vi/fXgdiW7ButA/maxresdefault.jpg',
    //   link: 'https://www.youtube.com/watch?v=fXgdiW7ButA',
    // },
    {
      id: 4,
      title: "Gujarat student Review about MBBS in Russia",
      channel: 'Edurizon Pvt Ltd',
      thumbnail: 'https://img.youtube.com/vi/lH4tke08ZdA/maxresdefault.jpg',
      link: 'https://www.youtube.com/watch?v=lH4tke08ZdA',
      state: "gujarat"
    },
    {
    id: 5,
    title: 'UP Students Review about MBBS ABROAD',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/by0AhfIJ3JQ/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=by0AhfIJ3JQ',
    state: "up"
    },
    {
    id: 6,
    title: "Why Edurizon is best MBBS Abroad Consultant ? Bihar Students Review",
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/3a6NCxM8F0M/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=3a6NCxM8F0M',
    state: "bihar"
    },
    {
    id: 7,
    title: 'West Bengal Students Review | Study MBBS Abroad',
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/5Da1bRZzhXE/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=5Da1bRZzhXE',
    state: "westBengal"
    },
    {
    id: 8,
    title: "Maharashtra Students Review | Study MBBS Abroad",
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/q48PbIuHhRU/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=q48PbIuHhRU',
    state: "maharashtra"
    },
    // {
    // id: 9,
    // title: 'Jharkhand Students Review about MBBS in Russia',
    // channel: 'Edurizon Pvt Ltd',
    // thumbnail: 'https://img.youtube.com/vi/mLvIl/maxresdefault.jpg',
    // link: 'https://www.youtube.com/watch?v=mLvIl-jMiDo',
    // },
    {
    id: 10,
    title: "Assam Students Review MBBS Abroad",
    channel: 'Edurizon Pvt Ltd',
    thumbnail: 'https://img.youtube.com/vi/3hyKvhTFucg/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=3hyKvhTFucg',
    state: "assam"
    },
    {
        id: 11,
        title: "Uttarakhand Student Review about Bashkir State Medical University | MBBS in Russia",
        channel: 'Edurizon Pvt Ltd',
        thumbnail: 'https://img.youtube.com/vi/CdGIKC9n9Nw/maxresdefault.jpg',
        link: 'https://www.youtube.com/watch?v=CdGIKC9n9Nw',
        state: "uttarakhand"
        },
  ];

  const categoriesMap: Record<string, string> = {viewAll:"View all", delhi:"Delhi", haryana:"Haryana", gujarat:"Gujarat", up:"Uttar Pradesh", bihar:"Bihar", westBengal:"West Bengal", maharashtra:"Maharashtra", assam:"Assam", uttarakhand:"Uttarakhand"};
  const categories = Object.keys(categoriesMap);


const VideoSection = () => {
    const [selectedButton, setSelectedButton] = useState(categories.indexOf('viewAll'));

    const [selectedCategory, setSelectedCategory] = useState<string>("viewAll");
    const handleCategoryChange = (category: string) => {
      setSelectedCategory(category);
    };
    const filteredVideoData = selectedCategory === "viewAll"
    ? videoData
    : videoData.filter((video) => video.state === selectedCategory);
    const [size, setSize] = useState<number>(videoData.length);
    useEffect(() => {
      setSize(filteredVideoData.length);
    }, [filteredVideoData]);
    
    const settings = {
        dots: false,
        infinite: size > 4,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ],
      };
  return (
    <div className='px-[5vw]'>
        <h2 className='text-h3TextPhone md:text-h2Text font-bold text-center pb-[2vw] md:pb-[1.5vw]'>
        Why Students Love Us
        </h2>
        <section className="mb-[16px] md:mb-[32px] mx-[-12px] sm:mx-[-16px] md:mx-[0px] lg:mb-[32px] xl:mb-[48px] overflow-x-auto whitespace-nowrap md:overflow-x-visible md:whitespace-normal md:flex justify-center md:flex-row gap-[8px] md:gap-[20px] lg:gap-[24px] flex-wrap">
      {categories.map((name, index) => (
        <div
          key={index}
          onClick={() => handleCategoryChange(name)}
          className={`inline-flex border-dotted border-2 mx-[4px] md:mx-0 ${
            selectedButton === index ? 'border-none' : 'border-orangeChosen'
          } rounded-[32px] items-center justify-center relative leading-[150%]`}
        >
          <button
            className={`text-black dark:text-white  min-w-[82px] text-[12px]  md:text-[1rem] leading-tight  rounded-[32px]   ${
              selectedButton === index ? 'bg-orangeChosen text-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] py-[9px] px-[18px]' : 'dark:bg-black bg-white py-[8px] px-[16px]'
            }`}
            onClick={() => setSelectedButton(index)}
          >
            {categoriesMap[name]}
          </button>
        </div>
      ))}
        </section>
        <Slider {...settings} className='px-[2vw] md:px-0  flex flex-row items-start justify-start'>
          {filteredVideoData.map((video) => (
            <div key={video.id} className="">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <div className=''>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-[2vw] md:rounded-[.5vw] border-gray-500 w-auto h-auto object-cover"
                  />
                  </div>
                <div className="mt-[2vw] md:mt-[1vw] dark:text-white">
                  <p className="font-semibold line-clamp-1 text-smallTextPhone md:text-regularText">{video.title}</p>
                  <p className="text-gray-600 dark:text-white text-tinyTextPhone md:text-tinyText">{video.channel}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>

    </div>
  )
}

export default VideoSection
