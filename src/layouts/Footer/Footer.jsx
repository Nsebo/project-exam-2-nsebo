import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className="footer-info">
                <h1 className='footer-name'>
                   Holidaze
                </h1>
                    <p>Your home away from home <strong>where you stay with comfort</strong>
                       </p>
                </div>
                <div className="useful-links">
                    <div className="footer-title">Useful Links</div>
                    <ul>
                        <li>Explore</li>
                        <li>Sign Up</li>
                        <li>Login</li>
                        <li>About Us</li>
                        <li>Rooms</li>
                    </ul>
                </div>
                <div className="">
                    <div className="footer-title">Get in Touch</div>
                    <form action="/" method="post" className="form">
                        <input type="text" name="name" className="name" id="name" placeholder="Enter your Name"/>
                        <input type="email" name="email" className="email" id="email" placeholder="Enter your Email Address"/>
                        <textarea type="text" name="message" className="message" id="message"
                                  placeholder="Enter your message..."></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
            <div className='copy-right'>Copyright &copy; 2023 | Nsebo</div>
        </footer>

    );
}

export default Footer;
