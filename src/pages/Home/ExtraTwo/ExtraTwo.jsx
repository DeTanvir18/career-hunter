import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from "react-icons/fa6";

const ExtraTwo = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <div>
            <div className="slider-container mt-8 mb-8 max-w-[1200px] mx-auto">
                <div className="max-w-[700px] mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-700 font-extrabold py-2 mt-16 mb-1">From Happy Faces!</h1>
                    <p className="text-[10px] md:text-[13px] font-medium mb-8">Explore endless opportunities and transform your career journey with Career Hunter, your ultimate job-hunting companion. Dive into a world of diverse job listings, from on-site to remote positions, tailored for every skill set. Our user-friendly platform connects talented professionals with top employers.</p>
                </div>
                <Slider {...settings} >
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-700'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/x2CVxsW/151824617photodeprofildunjeuneemployderaceblancheheureuxregardantlacamraposantdansunbureau200x200.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Awlad Hossain</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">UI/UX Designer</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >Career Hunter exceeded my expectations! The user-friendly interface and vast job opportunities made my job search effortless. The responsive support team was a game-changer. I found my dream job quickly, thanks to Career Hunter. Highly recommended for anyone seeking a seamless and efficient job-hunting experience.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/ftJyTMV/1000-F367464887f0w1-Jr-L8-Pddfu-H3-P2j-SPl-IGj-KU2-BI0rn200x200.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Tania Ahmed</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Graphic Designer</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >Career Hunter exceeded my expectations! The user-friendly interface and vast job opportunities made my job search effortless. The responsive support team was a game-changer. I found my dream job quickly, thanks to Career Hunter. Highly recommended for anyone seeking a seamless and efficient job-hunting experience.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-600'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/4VJMptd/1000-F3790020091yf-UXksnauvhw-Bwd-Zui-Opq-Swrv-COEFe6200x200.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Imran Khan</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Web Developer</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >Career Hunter exceeded my expectations! The user-friendly interface and vast job opportunities made my job search effortless. The responsive support team was a game-changer. I found my dream job quickly, thanks to Career Hunter. Highly recommended for anyone seeking a seamless and efficient job-hunting experience.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ExtraTwo;