import React from 'react';


const FeatureOne = () => {
  return (
    <section className="py-8 md:py-12 bg-stone-950">
      <div className="">
        <div className="md:flex  md:h-screen flex flex-col items-center justify-center text-center bg-transparent">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl  font-bold tracking-tighter pr-6 bg-gradient-to-b from-white to-[#4C3B4D] text-transparent bg-clip-text mt-6">
              Track your investments
            </h1>
            <p className="text-xl text-white tracking-tight mt-6 [text-wrap:balance] lg:mt-5 text-neutral-100">
              spendify helps you track your investment portforlio, track changes
              in profits and loss with real time push notifications and sms across different
              markets and assets classes. from comodities, stocks to crypto currencies.
            </p>
            <div className="py-3">
              <button className="btn btn-tex">
                <p>Set up your portforlio now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="">
                <div className="">
                  <p className="">
                    Keep a tap on crypto assets
                  </p>
                  <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                    Keep a real-time tap on crypto currencies, NFTs and all blockchain
                    based assets, with push notifications and sms on price movements
                    in record time.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
