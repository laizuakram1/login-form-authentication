import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import githubImg from '../../../../images/github2.png';
import googleImg from '../../../../images/google.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../../../firebase.init';


const SignUp = () => {
    const navigate = useNavigate();


    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const onSubmit = data => {
        
        const email = data.email;
        const password = data.password;

        //create user with email and password

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                navigate('/');
                // ...
            })
            .catch((error) => {
                setError(error.message);
                // ..
            });



    };
    return (

        <div className='py-10'>

            <form onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 gap-2 w-96 border border-slate-200 mx-auto p-8'>
                <h2 className='text-3xl font-bold'>Sign Up</h2>
                <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="Name"
                    class="input input-bordered w-full max-w-xs" />

                <input {...register("email", { required: true, maxLength: 20 })} type="email" placeholder="email"
                    class="input input-bordered w-full max-w-xs" />

                <input {...register("password", { required: true, maxLength: 20 })} type="password" placeholder="Password"
                    class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <Link to='/' class="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                <p>{error}</p>
                <input className='btn w-full mx-auto' type="submit" value='SignUp' />
                <label class="label">
                    <small>Already have an account? <Link to='/login' class="link link-hover text-red-300">Login</Link></small>
                </label>

                <div class="flex flex-col w-full border-opacity-50">

                    <div class="divider">OR</div>
                    <div className='flex justify-center items-center border border-black-200 rounded-box link link-hover mb-3'>
                        <div><img className='w-8 mr-2' src={githubImg} alt="" /></div>
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

export default SignUp;