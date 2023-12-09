import { Link } from "react-router-dom";
import { BsInfoSquare } from 'react-icons/bs';

const JobCard = ({ job }) => {
    const { _id, jobBanner, postedBy, employer, jobTitle, postingDate, deadline, salaryRange, applicantsNumber } = job;

    return (
        <div className="px-2">
            <div className="rounded-lg flex flex-col h-full">
                <div className="flex flex-col h-full shadow-2xl rounded-lg">
                    <figure><img className="w-full rounded-t-lg" src={jobBanner} alt="donation-img" /></figure>
                    <div className="p-2 flex flex-col justify-between flex-grow flex-1">
                        <div className="space-y-1 py-3">
                            <hr />
                            <hr />
                            <div className="ms-4">
                                <h3 className="text-xl  text-amber-700 font-semibold">{jobTitle}</h3>
                                <h3 className="text-sm font-semibold ms-2">{employer}</h3>
                                <h3 className="text-xs text-sky-800 font-bold ms-2">By {postedBy}</h3>
                            </div>
                            <hr />
                            <hr />
                        </div>
                        <div className="flex gap-3 text-orange-800">
                            <div className="space-y-1 py-3">
                                <h3><span className="font-bold">Salary:</span> {salaryRange}</h3>
                                <h3><span className="font-bold">Applicants:</span> {applicantsNumber}</h3>
                            </div>
                            <div className="space-y-1 py-3">
                                <h3><span className="font-bold">Starts:</span>{postingDate}</h3>
                                <h3><span className="font-bold">Closes:</span> {deadline}</h3>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to={`job/${_id}`}>
                                <button className="btn btn-info text-[14px] font-medium mt-5 mb-3 px-5 rounded-full"><BsInfoSquare></BsInfoSquare> Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;