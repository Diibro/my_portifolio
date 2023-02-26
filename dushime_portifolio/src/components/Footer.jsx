import React from 'react'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='Footer' >
      <div className='footer__Col'> {year} &copy; copyright </div>
      <div className='footer__Col'>Powered by <a href="https://www.descsoftlab.com">descsoftlab.com</a></div>
    </div>
  )
}

export default Footer;