import React from 'react';
import loginImg from "../../assets/login-img.jpg"
import googleIcon from "../../assets/flat-color-icons_google.png"


const Login = () => {
    return (
        <main>
            <div className="container">
                <div className="login-image">
                    <img src={loginImg} alt="login Image" />
                </div>
                <div className="">
                    <h1 className="login-title">
                        Welcome back, Cey
                    </h1>
                    <p className="signup-title">Welcome back! Please enter your details</p>
                </div>
                <div className="form">
                    <div className="form-body">

                        <div className="email">
                            <label className="form__label" htmlFor="email">Email </label>
                            <input type="email" id="email" className="form__input" placeholder="Enter email"/>
                        </div>
                        <div className="password">
                            <label className="form__label" htmlFor="password">Password </label>
                            <input className="form__input" type="password" id="password" placeholder="Enter Password"/>
                        </div>
                        <div>
                            <p className="">Remember for 30</p>
                            <p className="">forget password?</p>
                        </div>

                    </div>
                    <div className="submit-btn">
                        <button type="submit" className="btn">Log in</button>
                    </div>
                    <div className="google-btn">
                        <button type="submit" className="btn">
                            <img src={googleIcon} alt="google Icon" />
                            Log in</button>
                    </div>
                    <div>
                        <p className="">Don’t have an account? <a> Sign up for free</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
