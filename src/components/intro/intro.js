import React from 'react';
import './intro.css';
import shreyas from '../../img/shreyas.png';
import btnImg from '../../img/connect.png';
import {Link} from 'react-scroll';


const intro = () => {
  return (
    <section id="intro" >
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Shreyas</span><br/>Software Developer</span>
        <p className='introPara'>Tech Maven | Visionary Leader | Code & Invest | Math Geek |<br></br>| YouTube Creator | Relentless Worker 🚀</p>
        <Link><button className='btn'><img src={btnImg} alt="Connect with Me " className='btnImg'/>Connect With Me</button></Link>
      </div>
      <img src={shreyas} alt='profile' className='bg'/>
    </section>
  )
}

export default intro;