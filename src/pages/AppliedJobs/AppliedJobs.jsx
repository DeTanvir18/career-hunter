import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AppliedJobCard from "./AppliedJobCard/AppliedJobCard";
import { AuthContext } from "../../providers/AuthProvider";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [myAppliedJobs, setMyAppliedJobs] = useState([]);
    const [filteredDisplay, setFilteredDisplay] = useState([]);
    const [selectedValue, setSelectedValue] = useState('All');

    useEffect(() => {
        fetch(`https://a11-career-hunt-server.vercel.app/appliedjobs/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFilteredDisplay(data);
                setMyAppliedJobs(data);
            })
    }, [user])

    const handleSelectChange = (e) => {
        const filteredCategory = e.target.value;
        setSelectedValue(filteredCategory);
        if (filteredCategory === "All") {
            setFilteredDisplay(myAppliedJobs);
            return;
        }
        if (filteredCategory !== "All") {
            const filteredJobs = myAppliedJobs.filter(job => job.category === filteredCategory);
            setFilteredDisplay(filteredJobs);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Career | Applied Jobs</title>
            </Helmet>
            <div className="max-w-5xl mx-auto my-5 text-sky-500 font-bold text-center flex justify-start items-center gap-4">
                <span className="text-amber-800">Select and Filter</span>
                <select
                    value={selectedValue}
                    onChange={handleSelectChange}
                    className="block p-2 bg-white border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                >
                    <option value="All">All</option>
                    <option value="On Site">On Site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part Time">Part Time</option>
                </select>
            </div>

            <div className="overflow-x-scroll max-w-5xl mx-auto w-full my-12">
                <table className="table w-full table-auto">
                    <thead className="text-[15px] font-bold">
                        <tr>
                            <th>Job</th>
                            <th>Post</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDisplay !== 0 &&
                            filteredDisplay.map(myAppliedJob => <AppliedJobCard
                                key={myAppliedJob._id}
                                myAppliedJob={myAppliedJob}
                            ></AppliedJobCard>)
                        }
                        {
                            filteredDisplay.length === 0 && <>
                                <div className="flex flex-col justify-center items-center">
                                    <span className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</span>
                                    <div className='text-center my-12'>
                                        <span className="loading loading-spinner text-primary"></span>
                                        <span className="loading loading-spinner text-secondary"></span>
                                        <span className="loading loading-spinner text-accent"></span>
                                        <span className="loading loading-spinner text-neutral"></span>
                                        <span className="loading loading-spinner text-info"></span>
                                        <span className="loading loading-spinner text-success"></span>
                                        <span className="loading loading-spinner text-warning"></span>
                                        <span className="loading loading-spinner text-error"></span>
                                    </div>
                                    <progress className="progress w-56"></progress>
                                </div>
                            </>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;