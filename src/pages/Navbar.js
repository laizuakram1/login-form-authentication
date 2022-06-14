import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from '../firebase.init';
import userImg from '../images/main.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        signOut(auth);
        navigate('/login')
    }

    return (
        <div className="navbar bg-pink-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Laizu Akram</a>
            </div>
            <div className="flex-none gap-2">
                <ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/appointment' >Appointment</Link></li>
                    <li>{
                    user? <button onClick={handleLogOut} class="btn btn-ghost">LogOut</button>
                    :<Link to='/login' >Login</Link>
                    }</li>
                    
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userImg} alt='userPhoto' />
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;