import React from 'react';
import './Intro.css';
import shreyas from '../../img/shreyas.png';
import btnImg from '../../img/connect.png';
import {Link} from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Intro () {
  const [typeEffect] = useTypewriter({
    words:['Android & Web Developer','Math Geek','Investment Master','YouTube Creator'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })
    return (
      <section id="intro" >
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Shreyas</span><br></br><span>{typeEffect}</span></span>
          <p className='introPara'>Tech Maven | Visionary Leader | Code & Invest | Relentless Worker 🚀</p>
          <Link to="https://www.example.com"><button className='btn'><img src={btnImg} alt="Connect with Me " className='btnImg'/>Connect With Me</button></Link>
        </div>
        <img src={shreyas} alt='profile' className='bg'/>
      </section>
    )
  }
  
  export default Intro;
