import React, { useState, useEffect } from 'react';

const Header = ({ bgColor }) => {
    const [selectedCircle, setSelectedCircle] = useState('circle1');
    const [isScrolled, setIsScrolled] = useState(false);

    const handleCircleClick = (circleId) => {
        setSelectedCircle(circleId);
    };

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="sticky top-0 z-50 flex justify-end items-center px-10 py-6 gap-80 transition-colors duration-500 ${bgColor}"
        >
            <div
                className="flex gap-10 mr-52 transition-all duration-500 ${isScrolled ? 'ml-auto' : '}"
            >
                <div className="text-black text-xs font-normal font-['Inter'] relative group">
                    <span className="relative z-10">CODEBYLANRE</span>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"></div>
                </div>
                <div className="text-black text-xs font-normal font-['Inter'] relative group">
                    <span className="relative z-10">EMPTY</span>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"></div>
                </div>
                <div className="text-black text-xs font-normal font-['Inter'] relative group">
                    <span className="relative z-10">CONTACT</span>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"></div>
                </div>
            </div>
            <div
                className='inline-flex items-center cursor-pointer'
                onClick={() => handleCircleClick(selectedCircle === 'circle1' ? 'circle2' : 'circle1')}
            >
                <div
                    className={`rounded-full ${selectedCircle === 'circle1' ? 'w-4 h-4' : 'w-[0.67rem] h-[0.67rem]'} bg-[#2d312b] transition-all`}
                ></div>
                <div
                    className={`rounded-full ${selectedCircle === 'circle2' ? 'w-4 h-4' : 'w-[0.67rem] h-[0.67rem]'} bg-[#ffffff] border border-gray-400 transition-all`}
                ></div>
            </div>
        </div>
    );
}

export default Header;


