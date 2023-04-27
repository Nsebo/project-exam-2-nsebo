import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>Holidaze</h1>
                <nav>
                    <ul>
                        <li>Explore</li>
                        <li>Rooms</li>
                        <li>About</li>
                        <li>List your property</li>
                    </ul>
                </nav>
                <button>Log in</button>
                <button>Sign Up</button>

            </header>
        </div>
    );
};

export default Header;
