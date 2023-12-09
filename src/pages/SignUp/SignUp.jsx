import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (!/(?=.*[A-Z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please use at least 1 capital letter in your Password.'
            })
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please use at least 1 special character in your Password.'
            })
            return;
        }
        else if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should be at least 6 characters.'
            })
            return;
        }

        createUser(email, password)
            .then(() => {
                Swal.fire(
                    'User created successfully!',
                    'Welcome to The Career Hunt!',
                    'success'
                )
                navigate('/');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong User Information!'
                })
            })
        e.target.reset();
    }

    return (
        <div>
            <Helmet>
                <title>Career | Register</title>
            </Helmet>
            <div className="bg-[url('https://i.ibb.co/cXXHJGF/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh.jpg')] bg-cover bg-center mt-1 p-4">
                <div className="hero">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 shadow-2xl bg-transparent border border-white">
                            <div className="card-body p-2 md:p-4 lg:p-8">
                                <h1 className="text-3xl text-rose-500 font-bold text-center">Sign Up Please</h1>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                    </div>
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
                                            <a href="#" className="label-text text-white font-bold-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Photo URL</span>
                                        </label>
                                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <div className="">
                                            <input className="btn btn-primary bg-sky-600 w-full" type="submit" value="Sign Up" />
                                        </div>
                                    </div>
                                </form>
                                <p className='text-center my-4 text-white'>Already have an account? <Link className='text-rose-500 font-bold' to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;