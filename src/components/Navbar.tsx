import React from 'react'
import ThemeController from './ThemeController'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">emu.tips</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li><ThemeController/></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar