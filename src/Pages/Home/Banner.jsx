import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
import banner5 from "../../assets/banner5.jpg"
const Banner = () => {
    return (
        <>
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="w-full relative">
                            <img src={banner1} className="w-full" alt="" />
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <em className="text-6xl font-extrabold font-mono text-white ">Save cush for <br /> fun</em>
                            <br />
                            <button className="bg-green-600 py-3 px-4 text-white rounded-sm btn border-none">Book Today</button>
                            <h4 className="text-2xl font-bold text-red-600">25% <span className="text-teal-600">off</span></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={banner2} className="w-full" alt="" />
                        </div>
                        <div className="absolute bottom-14 left-10">
                            <button>Book Today</button>
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <em className="text-6xl font-extrabold font-mono text-teal-600">Save cush for <br /> fun</em>
                            <br />
                            <button className="bg-green-600 py-3 px-4 text-white rounded-sm btn border-none">Book Today</button>
                            <h4 className="text-2xl font-bold text-red-600">35% <span className="text-teal-600">off</span></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={banner3} className="w-full" alt="" />
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <button>Book Today</button>
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <em className="text-6xl font-extrabold font-mono text-white ">Only for you</em>
                            <br />
                            <button className="bg-green-600 py-3 px-4 text-white rounded-sm btn border-none">Book Today</button>
                            <h4 className="text-2xl font-bold text-red-600">20% <span className="text-teal-600">off</span></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={banner4} className="w-full" alt="" />
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <button>Book Today</button>
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <em className="text-6xl font-extrabold font-mono text-white ">Save cush for <br /> fun</em>
                            <br />
                            <button className="bg-green-600 py-3 px-4 text-white rounded-sm btn border-none">Book Today</button>
                            <h4 className="text-2xl font-bold text-red-600">30% <span className="text-teal-600">off</span></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={banner5} className="w-full" alt="" />
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <button>Book Today</button>
                        </div>
                        <div className="absolute  bottom-14 left-10">
                            <em className="text-6xl font-extrabold font-mono text-teal-600">Book Your stay</em>
                            <br />
                            <button className="bg-green-600 py-3 px-4 text-white rounded-sm btn border-none">Book Today</button>
                            <h4 className="text-2xl font-bold text-red-600">20% <span className="text-teal-600">off</span></h4>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>


                    <div className="text-center my-20" data-aos="fade-left" >
                        <h1  className="text-4xl font-bold mb-10"  >Hello! welcome There</h1>

                        <p data-aos="fade-left"   data-aos-duration="1000" className="mx-28">Our hostel is located in the city’s finest and trendiest district. Everyone who is interested in being a part of the creative and cutting-edge world that is New York, you are welcome to CityHostel for the best experience.</p>
                    </div>

        </>
    );
};

export default Banner;




// https://ibb.co/QYnmchL
// https://ibb.co/1MMYgnR
// https://ibb.co/3rRXQhn
// https://ibb.co/hCFGcYQ
// https://ibb.co/DGb4NbW