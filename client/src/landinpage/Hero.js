import React from 'react'
import { GoArrowRight } from "react-icons/go";


const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-stone-950">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#4C3B4D] text-transparent bg-clip-text mt-6">
              Pathway to financial security
            </h1>
            <p className="text-xl text-white tracking-tight mt-6">
              Celebrate the joy of hitting financial goals with an app that is designed
              to help you become financially pragmatic, help you cut down extravagant spending, and help you
              grow your wealth.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn">Start now</button>
              <button className="btn btn-text gap-1">
                <span className="text-white">Learn more</span>
                <GoArrowRight className="h-6 w-6"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero