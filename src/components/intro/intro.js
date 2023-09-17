import React from 'react'
import './intro.css'
import bg from '../../assets/profile.png'
import btnImg from '../../assets/portfolio.png'
import { Link } from 'react-scroll'


const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introName'>Emmanuel</span> <br />Fullstack Dev., UI/UX designer <br />and Data Scientist</span>
                <p className='introPara'>I am a skilled and passionate developer with experience in creating <br />visually appealing and user-friendly websites.</p>
                <Link><button className='btn'><img src = {btnImg} alt = 'Hire me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='profile' className='bg' />
    </section>
  )
}

export default Intro