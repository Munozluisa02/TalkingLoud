import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, serForm] = useState();
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        serForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {fullName, username, password, phoneNumber, avatarURL} = form;

        const URL = 'http://localhost:5000';
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sing Up' : 'Sing In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup &&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    type="text" 
                                    name="fullName"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    name="username"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignup &&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                    type="text" 
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup &&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input 
                                    type="text" 
                                    name="avatarURL"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        {isSignup &&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{isSignup ? "Sing Up" : "Sing In"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup 
                                ? "Already have an account?"
                                : "Don´t have an account?"
                            }
                            <span onClick={switchMode}>
                            {isSignup ? ' Sing In' : ' Sing Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sing in" />
            </div>
        </div>
    )
}

export default Auth
