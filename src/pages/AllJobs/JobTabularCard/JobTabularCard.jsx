import { Link } from "react-router-dom";
import { BsInfoSquare } from 'react-icons/bs';


const JobTabularCard = ({ tabularJob }) => {
    const { _id, companyLogo, postedBy, jobTitle, postingDate, deadline, salaryRange } = tabularJob;


    return (
            <tr>
                <th>
                    <div className="avatar">
                        <div className="rounded w-40 h-40">
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
                    <Link to={`jobdetails/${_id}`}>
                        <button className="flex justify-center items-center gap-2 text-pink-500 font-medium px-2 py-1 border rounded"><BsInfoSquare></BsInfoSquare> Details</button>
                    </Link>
                </th>
            </tr>
    );
};

export default JobTabularCard;