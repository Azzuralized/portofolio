import React from 'react'
import './PageTwo.css'
import Image from '../../../public/image.png'

const PageTwo = () => {
    return (
        <>

            <div className='two'>
                <img src={Image} alt="Deskripsi gambar" className="img" />
                <div className='caption'>I am a Computer science student at Wilfrid Laurier<br /> University and an aspiring software engineer and I’m <br /> currently growing and willing to find new environment<br /> to learn.<br />
                    <div className='other'>GET IN TOUCH (arrow)</div>
                </div>
            </div>
        </>

    )
}

export default PageTwo