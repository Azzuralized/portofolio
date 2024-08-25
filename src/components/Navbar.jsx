import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Header = () => {
    const [selectedCircle, setSelectedCircle] = useState('circle2');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleCircleClick = () => {
        setSelectedCircle(selectedCircle === 'circle1' ? 'circle2' : 'circle1');
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {

        const body = document.body;
        // Tambahkan class 'page-one' ke elemen body
        body.classList.add('page-one');

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }


    }, [isDarkMode]);

    return (
        <header className="header">
            <div className='brand'>Lanre</div>
            <div className="menu-container">
                <div className="menu-item">CODEBYLANRE</div>
                <div className="menu-item">EMPTY</div>
                <div className="menu-item">CONTACT</div>
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
        </header>
    );
};

export default Header;
