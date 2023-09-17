import React from 'react'
import './works.css'
import computer from '../../assets/computer.jpg'
import work1 from '../../assets/works1.jpg'
import work2 from '../../assets/works2.jpg'
import work3 from '../../assets/works3.jpg'
import work4 from '../../assets/works4.jpg'
import project from '../../assets/project.jpg'


const Works = () => {
  return (
    <section id='works'>
    <h2 className='worksTitle'>My Portfolio</h2>  
    <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."</span>
    <div className='worksImgs'>
        <img src={work1} alt="" className='worksImg' />
        <img src={work2} alt="" className='worksImg' />
        <img src={work3} alt="" className='worksImg' />
        <img src={work4} alt="" className='worksImg' />
        <img src={computer} alt="" className='worksImg' />
        <img src={project} alt="" className='worksImg' />
          </div>
          <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works