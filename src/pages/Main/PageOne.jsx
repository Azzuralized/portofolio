import React from 'react';
import './PageOne.css';
import Header from '../../components/Navbar';

const PageOne = () => {
    return (
        <>
            <div className="one">

                <div className="brief">
                    Hi, I’m an aspiring<br className='mobile-only' /> software engineer and<br className='mobile-only' /> a content <br className='desktop-only' />creator<br className='mobile-only' /> posting regularly <br className='mobile-only' />about my daily life and <br className='desktop-only' /> <br className='mobile-only' /> projects. A gentle <br className='mobile-only' /> rebellious student <br className='mobile-only' /> who believes <br className='desktop-only' />content<br className='mobile-only' /> is fire but social  media<br className='mobile-only' /> is gasoline.
                </div>


                <div className="brand">
                    Lanre
                    <div className='detail'>
                        A gentle rebellious studio who<br className='desktop-only' /> believes <br className='mobile-only' /> content is fire but social<br className='desktop-only' />media is gasoline
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageOne;
