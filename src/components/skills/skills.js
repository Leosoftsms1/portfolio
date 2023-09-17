import React from 'react'
import './skills.css'
import UIDesign from '../../assets/UIUX.png'
import WebDesign from '../../assets/webdesign.png'
import AppDesign from '../../assets/App.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually a]ealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, React, SCSS abd JavaScript as well as design software and UI/UX.</span>
      <div className="skillBars">
        <div className='skillBar'>
          <img src={UIDesign} alt="UI/UX" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills