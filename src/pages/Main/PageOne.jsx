import React from 'react';
import './PageOne.css';
import Header from '../../components/Navbar';

const PageOne = () => {
    return (
        <>
            <div className="one">

                <div className="brief">
                    Hi, I’m an aspiring software engineer and a content creator<br /> posting regularly about my daily life and projects. A gentle <br /> rebellious student who believes content is fire but social<br /> media is gasoline
                </div>

                <div className="brand">
                    Lanre
                    <div className='detail'>
                        A gentle rebellious studio who<br /> believes content is fire but social<br /> media is gasoline
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageOne;
