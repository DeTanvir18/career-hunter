import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                Swal.fire(
                    'Successfully Logged In!',
                    'Welcome to The Career Hunt!',
                    'success'
                )
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'auth/invalid-login-credentials!'
                })
            })
        e.target.reset();

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire(
                    'Google Login Successful!',
                    'Welcome to The Career Hunt!',
                    'success'
                )
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong User Information!'
                })
            })
    }



    return (
        <div className="bg-[url('https://i.ibb.co/cXXHJGF/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh.jpg')] bg-cover bg-center mt-1 p-4">
            <Helmet>
                <title>Career | Log In</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content">
                    <div className="card flex-shrink-0 shadow-2xl bg-transparent border border-white">
                        <div className="card-body p-2 md:p-4 lg:p-8 ">
                            <h1 className="text-3xl text-rose-500 font-bold text-center">Please Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-white font-bold">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary bg-sky-500" type="submit" value="Login" />
                                </div>
                            </form>
                            <div className="mt-6">
                                <button onClick={handleGoogleSignIn} className='w-full mb-2 btn btn-primary bg-sky-500'>
                                    <img src="https://i.ibb.co/S0WtyHP/761177025x25.png" alt="google" /> Google
                                </button>
                            </div>
                            <p className='text-center my-4 text-white'>New to Career Hunter? <Link className='text-rose-600 font-bold' to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;