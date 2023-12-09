import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hunt | 404</title>
            </Helmet>
            <div className="max-w-7xl mx-auto text-left p-2">
                <div className="max-w-5xl mx-auto mt-5">
                    <h2 className='text-4xl text-sky-500 font-extrabold'>Error 404</h2>
                    <h2 className='text-4xl font-extrabold'>Nothing found in that url.</h2>
                    <Link to="/"><button className="btn btn-accent btn-outline mt-2">Back Home</button></Link>
                </div>
                <img className="w-full" src="https://i.ibb.co/xzD6Y5t/404-thief-concept-RGYXL67-W4-C-w600.jpg" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;