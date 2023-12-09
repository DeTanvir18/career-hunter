import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const MyJobCard = ({ myJob, handleDelete }) => {
    const { user } = useContext(AuthContext);
    const { _id, category, employer, jobBanner, companyLogo, postedBy, jobTitle, postingDate, deadline, salaryRange, applicantsNumber, description } = myJob;
    const navigate = useNavigate();



    const handleUpdateJob = e => {
        const form = e.target;
        const category = form.category.value;
        const postedBy = form.name.value;
        const email = form.email.value;
        const employer = form.company.value;
        const jobTitle = form.title.value;
        const newPostingDate = form.postingDate.value;
        const newDeadline = form.deadline.value;
        const salaryRange = form.salary.value;
        const applicantsNumber = form.applicantsNumber.value;
        const companyLogo = form.logoUrl.value;
        const jobBanner = form.bannerUrl.value;
        const description = form.description.value;
        const updatedJob = {
            category,
            postedBy,
            email,
            employer,
            jobTitle,
            postingDate: newPostingDate,
            deadline: newDeadline,
            salaryRange,
            applicantsNumber,
            companyLogo,
            jobBanner,
            description,
        }

        // send data to the server
        fetch(`https://a11-career-hunt-server.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Info Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            navigate('/myjobs');
        e.target.reset();
    }
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="text-pink-500 font-medium px-2 py-1 border rounded">
                    Delete
                </button>
            </th>
            <th>
                <div className="avatar">
                    <div className="rounded w-28 h-28">
                        {companyLogo && <img src={companyLogo} />}
                    </div>
                </div>
            </th>
            <td>{postedBy}</td>
            <td>{jobTitle}</td>
            <td>{postingDate}</td>
            <td>{deadline}</td>
            <td>{salaryRange}</td>
            <th>
                {/* <button className="btn btn-error btn-sm">Update</button> */}
                <div className="flex p-2 md:p-4 rounded-b-lg space-x-4">
                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex justify-center items-center gap-2 text-pink-500 font-medium px-2 py-1 border rounded">Update</button>
                    {/* //* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <span className="font-bold text-amber-800 my-8 text-lg">Update Your Job Here.</span>
                            <form onSubmit={(e) => { handleUpdateJob(e); document.getElementById('my_modal_2').close(); }}>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" name="title" defaultValue={jobTitle} placeholder="Job Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Company Name</span>
                                    </label>
                                    <input type="text" name="company" defaultValue={employer} placeholder="Company Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Job Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="On Site/Remote/Hybrid/Part Time" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Job Banner URL</span>
                                    </label>
                                    <input type="text" name="bannerUrl" defaultValue={jobBanner} placeholder="URL of the Job Banner" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Company Logo</span>
                                    </label>
                                    <input type="text" name="logoUrl" defaultValue={companyLogo} placeholder="URL of the Company Logo" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Number of Applicants</span>
                                    </label>
                                    <input type="number" defaultValue={applicantsNumber} name="applicantsNumber" placeholder="Total Applicants" className="input input-bordered" required />

                                </div>

                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Salary Range</span>
                                    </label>
                                    <input type="text" name="salary" defaultValue={salaryRange} placeholder="$ " className="input input-bordered" required />
                                </div>
                                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                                    <div className="form-control my-2">
                                        <label className="label">
                                            <span className="label-text">Posting Date</span>
                                        </label>
                                        <input type="date" name="postingDate" placeholder="Posting Date" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control my-2">
                                        <label className="label">
                                            <span className="label-text">Deadline</span>
                                        </label>
                                        <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control my-2">
                                    <label className="block mb-2 text-sm font-bold text-amber-900 dark:text-white">Job Description</label>
                                    <textarea type='text' name="description" defaultValue={description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your toy description here..." required></textarea>
                                </div>
                                <div className="form-control  mt-6 w-1/3 mx-auto my-4">
                                    <input method="dialog" className="btn btn-info" type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </th>
        </tr>
    );
};

export default MyJobCard;