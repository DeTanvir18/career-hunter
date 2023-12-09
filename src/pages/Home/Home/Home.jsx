import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExtraOne from "../ExtraOne/ExtraOne";
import ExtraTwo from "../ExtraTwo/ExtraTwo";
import JobsByCategory from "../JobsByCategory/JobsByCategory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hunt | Home</title>
            </Helmet>
                <Banner></Banner>
                <ExtraOne></ExtraOne>
            <div className="max-w-[1320px] mx-auto">
                <JobsByCategory></JobsByCategory>
                <ExtraTwo></ExtraTwo>
            </div>
        </div>
    );
};

export default Home;