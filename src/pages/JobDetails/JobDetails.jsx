import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FcDocument } from "react-icons/fc";


const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const jobDetails = useLoaderData();
    const { _id, email, category, employer, jobBanner, companyLogo, postedBy, jobTitle, postingDate, deadline, salaryRange, applicantsNumber, description } = jobDetails;
    const [newApplicantsNumber, setNewApplicantsNumber] = useState(applicantsNumber);
    const [isApplied, setIsApplied] = useState(false);

    const handleSubmitResume = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const resume = form.resume.value;

        const presentTime = Date.now();
        if (presentTime > new Date(deadline).getTime()) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: 'The application deadline for this job has passed. You cannot apply.',
            });
            return;
        }

        if (userEmail === email) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: 'You cannot apply for your own job.',
            })
            return;
        }

        const userAppliedInfo = {
            companyLogo,
            jobTitle,
            category,
            deadline,
            userName,
            email: userEmail,
            resume
        }
        // app.post(sending data to backend for applying)
        fetch('https://a11-career-hunt-server.vercel.app/appliedjobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userAppliedInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    fetch(`https://a11-career-hunt-server.vercel.app/updatejobs/${_id}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount) {
                                setIsApplied(true);
                                const increasedApplicantsNumber = newApplicantsNumber + 1;
                                setNewApplicantsNumber(increasedApplicantsNumber);
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Yay...',
                                    text: 'Successfully Applied. Applicants Number of this Job has been updated',
                                })
                            }
                        })
                }
            })
        e.target.reset();
    }

    return (
        <div>
            <Helmet>
                <title>Career | Job Details</title>
            </Helmet>
            <div className="mt-10 md:mt-20 mb-96 max-w-[820px] mx-auto p-2">
                <div className="w-full shadow rounded-lg ms-1 md:ms-0">
                    <img className="w-full rounded-lg" src={jobBanner} alt="donation-img" />
                    <div className="space-y-1 py-3 ms-4 max-w-md">
                        <hr />
                        <hr />
                        <div className="text-center">
                            <h3 className="text-xl  text-amber-700 font-semibold">{jobTitle}</h3>
                            <h3 className="text-sm font-semibold ms-2">{employer}</h3>
                            <h3 className="text-xs text-sky-800 font-bold ms-2">By {postedBy}</h3>
                        </div>
                        <hr />
                        <hr />
                    </div>
                    <div className="flex flex-col h-full shadow-lg border rounded-lg mx-2 p-1">
                        <div className="flex flex-col h-full lg:flex-row justify-center lg:justify-start items-center gap-2">
                            <div>
                                <figure><img className="w-40 rounded-t-lg  lg:rounded-tl-lg me-16" src={companyLogo} alt="donation-img" /></figure>
                            </div>
                            <div className="flex flex-col md:flex-row justify-start items-center mx-0 lg:mx-2 mt-5 space-y-3 p-2 md:p-4">
                                <div className="text-orange-800">
                                    <div className="space-y-1">
                                        <h3><span className="font-bold">Salary:</span> {salaryRange}</h3>
                                        <h3><span className="font-bold">Applicants:</span> {newApplicantsNumber}</h3>
                                    </div>
                                    <div className="space-y-1">
                                        <h3><span className="font-bold">Starts:</span>{postingDate}</h3>
                                        <h3><span className="font-bold">Closes:</span> {deadline}</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-2 p-2 md:p-4 rounded-b-lg space-x-4">
                                    <h3 className="text-orange-600 font-bold"><span className="font-bold text-black">Type:</span> {category}</h3>
                                    {
                                        !isApplied
                                            ?
                                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex justify-center items-center text-xl text-sky-700 font-bold mb-3 px-5 py-2 border-2 rounded shadow-2xl"><FcDocument></FcDocument> <span> Apply</span></button>
                                            :
                                            <button className="flex justify-center items-center text-xl text-sky-700 font-bold mb-3 px-5 py-2 border-2 rounded shadow-2xl"><span>Applied</span></button>
                                    }
                                    {/* //* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Apply With Your Resume.</h3>
                                            <form onSubmit={(e) => { handleSubmitResume(e); document.getElementById('my_modal_1').close(); }}>
                                                <div className="form-control my-2">
                                                    <label className="label">
                                                        <span className="label-text">Your Name</span>
                                                    </label>
                                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control my-2">
                                                    <label className="label">
                                                        <span className="label-text">Your Email</span>
                                                    </label>
                                                    <input type="text" name="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control my-2">
                                                    <label className="label">
                                                        <span className="label-text">Resume</span>
                                                    </label>
                                                    <input type="text" name="resume" placeholder="URL of the Job Banner" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control  mt-6 w-full my-4">
                                                    <input method="dialog" className="btn btn-info" type="submit" value="Submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-purple-800 border border-sky-100 font-medium p-3">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;