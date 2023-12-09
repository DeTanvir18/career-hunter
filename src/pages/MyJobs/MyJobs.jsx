import { Helmet } from "react-helmet-async";
import MyJobCard from "./MyJobCard/MyJobCard";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyJobs = () => {
    const { user } = useContext(AuthContext)
    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        fetch(`https://a11-career-hunt-server.vercel.app/jobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyJobs(data))
    }, [user])
    // Delete a job
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a11-career-hunt-server.vercel.app/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                text: 'Your Job is deleted successfully',
                            })
                            const remaining = myJobs.filter(myJob => myJob._id !== id);
                            setMyJobs(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Career | My Jobs</title>
            </Helmet>
            <div className="overflow-x-auto max-w-5xl mx-auto w-full my-12">
                <table className="table w-full table-auto">
                    <thead className="text-[15px] font-bold">
                        <tr>
                            <th>Remove</th>
                            <th>Company</th>
                            <th>Posted By</th>
                            <th>Job Tiltle</th>
                            <th>Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myJobs !== 0 &&
                            myJobs.map(myJob => <MyJobCard
                                key={myJob._id}
                                myJob={myJob}
                                handleDelete={handleDelete}
                            ></MyJobCard>)
                        }
                        {
                            myJobs.length === 0 && <>
                                <span className="my-16 text-center text-2xl text-pink-500 font-bold mx-auto">You have no Job To Display.</span>
                            </>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;