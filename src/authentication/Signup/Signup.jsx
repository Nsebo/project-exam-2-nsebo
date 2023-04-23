import React, {useState} from 'react';
import signupImg from "../../assets/signup-img.jpg"
import googleIcon from "../../assets/flat-color-icons_google.png"

const Signup = () => {
    return (
        <main>
        <div className="container">
            <div className="signup-image">
                <img src={signupImg} alt="Signup Image" />
            </div>
            <div className="">
                <h1 className="signup-title">
                    Create an Account
                </h1>
                <p className="signup-title">Became holidaze member ,you’ll get exlusive
                    offers from holidaze</p>
            </div>
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" htmlFor="name">Name </label>
                        <input className="form__input" type="text" id="name" placeholder="Enter your name"/>
                    </div>
                    <div className="email">
                        <label className="form__label" htmlFor="email">Email </label>
                        <input type="email" id="email" className="form__input" placeholder="Enter email"/>
                    </div>
                    <div className="password">
                        <label className="form__label" htmlFor="password">Password </label>
                        <input className="form__input" type="password" id="password" placeholder="Create a Password"/>
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword"
                               placeholder="Confirm Password"/>
                    </div>
                    <div className="Avatar">
                        <label className="form__label" htmlFor="avatar">Avatar</label>
                        <input type="avatar" name="avatar" id="avatar" className="form__input" placeholder="Avatar url"/>
                    </div>
                </div>
                <div className="submit-btn">
                    <button type="submit" className="btn">Create an Account</button>
                </div>
                <div className="google-btn">
                    <button type="submit" className="btn">
                        <img src={googleIcon} alt="google Icon" />
                        Log in</button>
                </div>
                <div>
                    <p className="">Already have an account? <a>log in</a></p>
                </div>
            </div>
        </div>
        </main>
    );
};

export default Signup;
