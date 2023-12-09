import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex flex-col justify-center items-center">
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
    }

    if (user) {
        return children;
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to log in first to go there.'
    })

    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;