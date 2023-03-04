import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='head'>
      <div className='text'>
      <Link to='/loginvendor'>
        <span className='logo'> LOGO </span></Link>
                <div className='name'>
                <Link to='/loginvendor' style={{textDecoration: "none"}}>
                  <span className='vendor'>Vendor Name</span></Link>
                  <span>
                    <img className='img' src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt="head" />
                  </span>
                </div>
      </div>
    </div>
  )
}

export default Header
