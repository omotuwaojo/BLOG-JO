import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className='flex justify-around'>
       <div className='logo'>
        <Link to="/">BLOG-JO</Link>
       </div>
       <ul className='nav-links flex space-x-4'>
        <Link to="/sign-in">Sign-In</Link>
        <Link to="/sign-up">Sign-Up</Link>
       </ul>
      </nav>
    </div>
  )
}
