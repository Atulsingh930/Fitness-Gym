// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Keyboard, Pagination, Navigation, Mousewheel } from "swiper";

const YTdowm = (props)=> {
  let{exerciseVideo} = props;
  // let val = exerciseVideo[0].channelId
  return (
    <>
    <div className="YTvideo" >
      <h1 style={{margin : "3vw"}}>Watch <span style={{color : "red" , textTransform : "capitalize"}}>{props.name}</span> exercise videos</h1>
      <div className="container-fluid"> 
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
        cssMode={true}
        navigation={true}
        // pagination={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {exerciseVideo?.map((element)=>{
            return (
            <div className="YTdownvid" key={element.video.videoId}>
              <SwiperSlide key={element.video.videoId}>
              <a href={`https://www.youtube.com/watch?v=${element.video.videoId}`} target="_blank" rel="noreferrer" style={{textDecoration : "none", color : "black"}} >
                <div className="card mx-4 my-2" id="ytcard" style={{width: "22rem"}}>
                  <img src= {element.video.thumbnails[0].url} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title" style={{textDecoration : "none"}}>{element.video.title}</h5>
                    <p className="card-text">{element.video.author.title}</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            </div>
            );
        })}
      </Swiper>
      </div>
      </div>
    </>
  );
}
export default YTdowm