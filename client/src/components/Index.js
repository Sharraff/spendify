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
            <div className="div-1">
              <h1>Easily Manage and track spendings.</h1>
            </div>
            <div className="">
              <h1>Pay all bills from within Spendify without moving between apps</h1>
            </div>
            <div className="">
              <h1>track Investments and savings</h1>
            </div>
            <div className="">
              <h1>keep a tap on loans and morgages</h1>
            </div>
            <div className="">
              <h1>get updates and push notifications on changes in interest rates, 
                profit and loss in investments and saving milestones. 
              </h1>
            </div>
            <div className="">
              <h1>You get recomendations on opportunities in tune with your favourite
                asset classes, food comodities and investment opportunities.
              </h1>
            </div>
        <FooterBanner/>
    </>
    
  )
}

export default Index;