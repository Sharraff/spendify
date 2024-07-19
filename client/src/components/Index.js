import React, { useEffect } from 'react'
import HeroBanner from './HeroBaner';
import FooterBanner from './FooterBanner';
import Login from './Login';
import Header from './Header';
// import './App.css'


const Index = () => {
  return (
    <>
       <Header/>
       <HeroBanner/>
            <div>Index</div>
        <FooterBanner/>
    </>
    
  )
}

export default Index;