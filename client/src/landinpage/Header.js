import React from 'react'
import Logo from '../assets/spendify-_4_.svg';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="top-0 backdrop-blur-sm z-20">
        <div className="py-5 bg-slate-300">
            <div className="container">
                <div className="flex items-center justify-between">
                    <img 
                      src={Logo}
                      alt="Spendify Logo"
                      height={90}
                      width={90}
                      className=""
                    />
                    <RxHamburgerMenu className="h-5 w-5 md:hidden" />
                    <nav className="hidden md:flex gap-6 text-white/60 items-center">
                      <a href="#">About</a>
                      <a href="#">Features</a>
                      <a href="#">Updates</a>
                      <a href="#">Contact</a>
                      <button className="btn">Get started now!</button>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header