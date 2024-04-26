import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
                            <img src="../../../public/banner1.jpg" className="w-full" alt="" />
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
                            <img src="../../../public/banner2.jpg" className="w-full" alt="" />
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
                            <img src="../../../public/banner3.jpg" className="w-full" alt="" />
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
                            <img src="../../../public/banner4.jpg" className="w-full" alt="" />
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
                            <img src="../../../public/banner5.jpg" className="w-full" alt="" />
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


                    <div className="text-center my-20">
                        <h1 className="text-4xl font-bold mb-10">Hello! welcome There</h1>
                        <p className="mx-28">Our hostel is located in the city’s finest and trendiest district. Everyone who is interested in being a part of the creative and cutting-edge world that is New York, you are welcome to CityHostel for the best experience.</p>
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