import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




interface Video {
  id: number;
  link: string;
  thumbnail: string;
  title: string;
  channel: string;
}

const VideoCarousel = ({ videoData, title='What Our Students Have Say About Us' }: {title?:string,videoData: Video[] }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  
    return (
      <div className=" mb-[10vw] md:mb-[8vw] ">
        <h2 className="text-center text-h5TextPhone md:text-h3Text font-bold mb-[2vw] md:mb-[1vw] leading-[130%]">{title}</h2>
        <Slider {...settings} className='px-[2vw] md:px-0 flex flex-row items-start justify-start'>
          {videoData.map((video) => (
            <div key={video.id} className="">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <div className=''>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-[2vw] md:rounded-[.5vw] border-gray-500 w-auto h-auto object-cover"
                  />
                  </div>
                <div className="mt-[2vw] md:mt-[1vw]">
                  <p className="font-semibold line-clamp-1 text-smallTextPhone md:text-regularText dark:text-white">{video.title}</p>
                  <p className="text-gray-600 text-tinyTextPhone md:text-tinyText">{video.channel}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default VideoCarousel;