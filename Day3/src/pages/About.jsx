import React from 'react';
import CustomNavbar from '../components/custom_navbar';
import '../assets/css/about.css'
import about_img from '../assets/images/about1.png'
const About = () => {
    return (
        <div className='about_container'> 
            <header>
            <CustomNavbar/>
            </header>
                <div className='about__text1'>
                    Welcome!!! 
                </div>
                <div className='about__text2'>
                    I'm Pranav Krishna
                    </div>
                <div className='about__text3'>
                    Web Designer (Newbie)
                    </div>
            <aside>
            <div className='con'>
                GitHub: https://github.com/PranavKrishna1503
                <br/>
                Mail: pranavkrishna15032004@gmail.com
            </div>
            </aside>
        </div>
    );
}

export default About;
