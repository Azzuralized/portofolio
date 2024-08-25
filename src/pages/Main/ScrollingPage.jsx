import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'


const ScrollingPage = () => {
    return (
        <>
            <div className='container'>
                <PageOne />
                <PageTwo />
                <PageThree />

            </div>

        </>
    )
}

export default ScrollingPage