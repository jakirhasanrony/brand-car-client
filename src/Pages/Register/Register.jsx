import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";




const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { createUserWithEmail } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        if (password.length < 6) {
            Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: 'Password should be at least 6 character',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: 'Password should have at least one UpperCase Letter',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        else if (!/[*.!@#$%^&(){}[\]:;<>,.?/~_+\-=|/]/.test(password)) {
            Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: 'Password should have at least one Special Character',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        createUserWithEmail(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

             



                navigate('/')

                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="py-10" >
            <h2 className="text-3xl font-bold text-center my-10">PLease Register</h2>
            <form onSubmit={handleRegister} className="mx-auto p-12 md:w-3/4 lg:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Provide your name here" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Provide your image url here" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Provide your email here" className="input input-bordered" required />
                </div>
                <div className="form-control  relative ">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Password</span>
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Provide your password here" className="input input-bordered" required />
                    <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-3 text-xl">
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }

                    </span>

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-block bg-black text-white">Register</button>
                </div>

               
            </form>
            <p className="text-center
         text-gray-500  mt-8">Already have an account? Please <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;