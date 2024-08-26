import React from 'react'
import './PageTwo.css'
import Image from '../../../public/image.png'

const PageTwo = () => {
    return (
        <>

            <div className='two'>
                <img src={Image} alt="Deskripsi gambar" className="img" />
                <div className='caption'>I am a Computer science<br className='mobile-only' /> student at Wilfrid Laurier<br className='desktop-only' /> <br className='mobile-only' /> University and an aspiring<br className='mobile-only' /> software engineer and I’m <br className='desktop-only' /> <br className='mobile-only' /> currently growing and willing to<br className='mobile-only' /> find new environment<br className='desktop-only' /> to learn.<br />
                    <div className='other'>GET IN TOUCH (arrow)</div>
                </div>


            </div>
        </>

    )
}

export default PageTwo