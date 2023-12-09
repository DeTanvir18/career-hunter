import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/nLn2Kkn/113708140-young-businesswoman-with-business-sketch-on-concrete-background-career-development-and-tea.jpg')] bg-cover bg-center rounded-sm">
                <motion.div
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 2 }} 
                    transition={{ duration: 3 }} 
                >
                    <div className="bg-black bg-opacity-50 ">
                        <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                            <h1 className="mb-5 text-3xl md:text-4xl font-bold">You are in the Right Way towards your <br /><span className="text-pink-600">Dream Career</span></h1>
                            <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to the Career Hunt Manpower Solution Private Limited! Where dreams come to life. Let us create unforgettable moments together at your Dream Career!</p>
                            <form className="ps-2 md:ps-0 ">
                                <input className="border p-4 rounded-l-lg pe-8 md:pe-20 shadow mb-1" style={{ background: 'white' }} type="text" name="search" id="" placeholder="Search Here..." />
                                <input className="bg-pink-700 text-white font-semibold px-6 py-[17px] rounded-r-lg" type="submit" value="Get Started" />
                            </form>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;