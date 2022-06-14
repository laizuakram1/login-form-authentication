import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import githubImg from '../../../../images/github2.png';
import googleImg from '../../../../images/google.png';




const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                toast('login successful');
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast('login failed');
            });

    };



    return (
        <div className='py-8'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 gap-3 w-96 border border-slate-200
                 mx-auto p-8'>
                <h2 className='text-3xl font-bold'>Login</h2>

                <input {...register("email", { required: true, maxLength: 20 })} type="email" placeholder="email"
                    class="input input-bordered w-full max-w-xs" />

                <input {...register("password", { required: true, maxLength: 20 })} type="password" placeholder="Password"
                    class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <Link to='/' class="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                <input className='btn w-full mx-auto' type="submit" value='Login' />
                <label class="label">
                    <small>New to Doctors-portal? <Link to='/signup' class="link link-hover text-red-300">SignUp</Link></small>
                </label>

                <div class="flex flex-col w-full border-opacity-50">

                    <div class="divider">OR</div>
                    <div className='flex justify-center items-center border border-black-200 rounded-box link link-hover mb-3'>
                        <div><img className='w-8 mr-2' src={githubImg} alt="github" /></div>
                        <div class="grid h-20 rounded-box place-items-center">Continue with Github</div>
                    </div>
                    <div className='flex justify-center items-center border border-black-200 rounded-box link link-hover'>
                        <div><img className='w-8 mr-2' src={googleImg} alt="google" /></div>
                        <div class="grid h-20 rounded-box place-items-center">Continue with Google</div>
                    </div>

                </div>

            </form>

        </div>
    );
};

export default Login;