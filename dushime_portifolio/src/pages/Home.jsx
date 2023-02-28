import React from 'react';
import PdfDisplay from '../components/pdfDisplay';
import Resume from '../assets/Resume.pdf';

const Home = () => {
  return (
    <div className='Home'>
      <div className='section-1'>
        <h1 className='title'>Hi. I'm <span>Dushime Brother</span>. <br/> A fullstack developer.</h1>
        <p className='paragraph'>I have a solid foundation in technologies such as React JS, PHP, HTML, CSS, Javascript and various frameworks like Laravel and Symfony.</p>
      </div>
      <div className='section-2'>
          <div className='projects'>
            <h2>Projects</h2>
            <div className='project-list'>
              <ul>
                <li><a href="https://celebrate.rw/">Celebrate Gifts</a></li>
                <li><a href="https://calc-desc-softlab.netlify.app/">Desc calculator</a></li>
                <li><a href="#">descsoftlab site</a></li>
                <li><a href="https://bookings.huuzagroup.com/">bookings website</a></li>
                <li><a href="#">More...</a></li>
              </ul>
            </div>
          </div>
        <div className='doc-sec'>
          <div className='title'>
            <a href='/src/assets/Resume.pdf'>My CV</a>
            <PdfDisplay pdf={Resume} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;