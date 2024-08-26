import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Header = () => {
    const [selectedCircle, setSelectedCircle] = useState('circle2');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCircleClick = () => {
        setSelectedCircle(selectedCircle === 'circle1' ? 'circle2' : 'circle1');
        setIsDarkMode(!isDarkMode);
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const body = document.body;
        body.classList.add('page-one');

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <header className="header">
            <div className="brand">Lanre</div>
            <div className="menu-container">
                <div className="menu-item">CODEBYLANRE</div>
                <div className="menu-item">EMPTY</div>
                <div className="menu-item">CONTACT</div>
            </div>

            {/* Hamburger */}
            <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                <span></span>
                <span></span>
            </div>

            {/* Toggle Theme */}
            <div className="toggle-container" onClick={handleCircleClick}>
                <div
                    className={`circle circle1 ${selectedCircle === 'circle1' ? 'active' : ''}`}
                ></div>
                <div
                    className={`circle circle2 ${selectedCircle === 'circle2' ? 'active' : ''}`}
                ></div>
            </div>

            {/* Menu Content (display only when menu is open) */}
            <div className={`menu-content ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                {/* Additional Toggle Theme inside Menu Content */}
                <div className="toggle-container menu-toggle" onClick={handleCircleClick}>
                    <div
                        className={`circle circle1 ${selectedCircle === 'circle1' ? 'active' : ''}`}
                    ></div>
                    <div
                        className={`circle circle2 ${selectedCircle === 'circle2' ? 'active' : ''}`}
                    ></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
