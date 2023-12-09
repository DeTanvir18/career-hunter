import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";



const AddAJob = () => {
    const { user } = useContext(AuthContext);

    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const postedBy = form.name.value;
        const email = form.email.value;
        const employer = form.company.value;
        const jobTitle = form.title.value;
        const postingDate = form.postingDate.value;
        const deadline = form.deadline.value;
        const salaryRange = form.salary.value;
        const applicantsNumber = form.applicantsNumber.value;
        const companyLogo = form.logoUrl.value;
        const jobBanner = form.bannerUrl.value;
        const description = form.description.value;
        const addJob = {
            category,
            postedBy,
            email,
            employer,
            jobTitle,
            postingDate,
            deadline,
            salaryRange,
            applicantsNumber,
            companyLogo,
            jobBanner,
            description,
        }


        // app.post(sending data to backend for booking)
        fetch('https://a11-career-hunt-server.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Yay...',
                        text: 'Job Added successfully.',
                    })
                }
            })
        e.target.reset();
    }


    return (
        <div>
            <Helmet>
                <title>Career | Add A Job</title>
            </Helmet>
            <div className="bg-[#fff6f6] md:w-1/2 lg:2/3 mx-auto border rounded-lg p-2 my-4">
                <h2 className="text-3xl text-orange-800 text-center font-bold my-12">Post Your Job Here</h2>
                <form onSubmit={handleAddAJob}>
                    <div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Job Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Company Name</span>
                                </label>
                                <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Job Category</span>
                                </label>
                                <input type="text" name="category" placeholder="On Site/Remote/Hybrid/Part Time" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Job Banner URL</span>
                                </label>
                                <input type="text" name="bannerUrl" placeholder="URL of the Job Banner" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Company Logo</span>
                                </label>
                                <input type="text" name="logoUrl" placeholder="URL of the Company Logo" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Salary Range</span>
                                </label>
                                <input type="text" name="salary" placeholder="10k-20k" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center items-center">
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">User Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">User Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Number of Applicants</span>
                                </label>
                                <input type="number" defaultValue={0} name="applicantsNumber" placeholder="Total Applicants" className="input input-bordered" required />

                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Posting Date</span>
                                </label>
                                <input type="date" name="postingDate" placeholder="Posting Date" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-2">
                                <label className="label">
                                    <span className="label-text text-sky-800 font-bold">Deadline</span>
                                </label>
                                <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control my-2">
                            <label className="block mb-2 text-sm text-sky-800 font-bold dark:text-white">Job Description</label>
                            <textarea type='text' name="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your toy description here..." required></textarea>
                        </div>
                    </div>
                    <div className="form-control  mt-6 w-1/2 mx-auto my-4">
                        <input className="btn btn-info" type="submit" value="Confirm Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAJob;