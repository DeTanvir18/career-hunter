import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import JobTabularCard from "./JobTabularCard/JobTabularCard";
import Swal from "sweetalert2";

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [searchedJobs, setSearchedJobs] = useState([]);


    useEffect(() => {
        fetch('https://a11-career-hunt-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setSearchedJobs(data);
                setAllJobs(data);
            })
    }, [])

    const handleSearch = e => {
        e.preventDefault();
        const searchValue = e.target.search.value.toLowerCase();

        if (searchValue) {
            const displayedJobs = allJobs.filter(
                jobs => jobs.jobTitle.toLowerCase().includes(searchValue)
            );
            setSearchedJobs(displayedJobs);
            if (!displayedJobs.length) {
                setSearchedJobs([]);
                Swal.fire({
                    icon: 'warning',
                    text: 'No matching item found',
                })
            }
        }
    }

    return (
        <div>
            <Helmet>
                <title>Career | All Jobs</title>
            </Helmet>
            <div className="mt-5 space-y-7">
                {/* search input field */}
                <div className="w-full flex flex-col  justify-center items-center text-center pt-32 pb-52 ps-2 lg:ps-0">
                    <h2 className="text-5xl text-amber-700 font-bold">See All Jobs</h2>
                    <p className="text-sky-800">We offer all the demanding job you would love to see.<br /> Start finding your dream job with us. We are desperately waiting for you to come with us and explore us.<br /> Hope you will not be disappointed.</p>
                    <form onSubmit={handleSearch} className="mt-2 ps-2 md:ps-0">
                        <input className="border p-4 rounded-l-lg pe-14 md:pe-32 shadow mb-1" style={{ background: 'white' }} type="text" name="search" id="" placeholder="Job Title here..." />
                        <input className="bg-[#2a6bab] text-white font-semibold px-6 py-[17px] rounded-r-lg" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className="overflow-x-auto max-w-5xl mx-auto w-full my-12">
                <table className="table w-full table-auto">
                    <thead className="text-[15px] font-bold">
                        <tr>
                            <th>Company</th>
                            <th>Posted By</th>
                            <th>Job Tiltle</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchedJobs.map(tabularJob => <JobTabularCard
                                key={tabularJob._id}
                                tabularJob={tabularJob}
                            ></JobTabularCard>)
                        }
                        {
                            searchedJobs.length === 0 && <>
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

export default AllJobs;