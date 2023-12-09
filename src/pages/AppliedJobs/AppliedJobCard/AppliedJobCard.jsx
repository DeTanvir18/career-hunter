
const AppliedJobCard = ({ myAppliedJob }) => {
    const { companyLogo, category, jobTitle, deadline, userName, email, resume } = myAppliedJob;

    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="rounded w-40 h-40">
                        {companyLogo && <img src={companyLogo} />}
                    </div>
                </div>
            </th>
            <td>{jobTitle}</td>
            <td>{category}</td>
            <td>{deadline}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <a className="text-blue-500 font-medium underline" href={resume}>Resume Here</a>
            </td>
        </tr>
    );
};

export default AppliedJobCard;