import React from 'react'
import FcmbLogo from '../assets/Fcmb.png';
import NGX from '../assets/NGX.png';
import FirstBank from '../assets/First-Bank.svg';
import PiggyVest from '../assets/piggivest.svg';
import Zennith from '../assets/zenith-bank-logo.png';
import Access from '../assets/access-lg-logo.png';
import Opay from '../assets/opay.png';
import Kuda from '../assets/Kuda.png';

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-stone-950">
        <div className="container">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right, transparent, black, transparent)]">
                <div className="flex gap-14 flex-none">
                    <img
                      src={FcmbLogo}
                      alt="Fcmb"
                      className="logo-ticker-image"
                    />
                    <img
                      src={NGX}
                      alt="Nigerian Stock Exchange"
                      className="logo-ticker-image" 
                    />
                    <img
                      src={FirstBank}
                      alt="Firstbank"
                      className="logo-ticker-image" 
                    />
                    <img
                      src={PiggyVest}
                      alt="Piggy vest"
                      className="logo-ticker-image"
                    />
                    <img
                      src={Zennith}
                      alt="Zennith"
                      className="logo-ticker-image"
                    />
                    <img
                      src={Access}
                      alt="Access"
                      className="logo-ticker-image"
                    />
                    <img
                      src={Opay}
                      alt="Opay"
                      className="logo-ticker-image"
                    />
                    <img
                      src={Kuda}
                      alt="Kuda"
                      className="logo-ticker-image"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker;