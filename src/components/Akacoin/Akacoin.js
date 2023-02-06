import React from 'react';
import website from "../../images/Website.png"
import arrow from "../../images/Arrow 1.png"


import rectangle from "../../images/Rectangle 7.png"

import Ellipse from "../../images/Ellipse 13.png"
import Transition from "../../images/Transition.png"

import Bitcoin1 from "../../images/Bitcoin (1).png"
import Bitcoin3 from "../../images/Bitcoin.png"



import "./Akacoin.css"

const Akacoin = () => {
    return (
        <div className='container'>
            <h2 className='title'>What Is Akacoin?</h2>
            <div className='row akacoin-container  d-flex justify-content-center '>
                <div className='col-12 col-lg-4'>
                    <div className=''>
                        <h2 className='image-title'>The fastest growing and community friendly</h2>
                        <div className='' >
                            <img className='w-100' src={website} alt="" />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-8 '>
                    <p className='akacoin-desc mb-5 color-red' >Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.</p>
                    <a className='explore' href="_#">Explore Ecosystem <img className='ms-2' src={arrow} alt="" /></a>



                    <div className='watch position-relative'>
                        <img className='w-50' src={Transition} alt="" />
                        {/* <img className='' src={Ellipse} alt="" /> */}
                        <img className='position-absolute  bottom-0 w-25 w-md-100' src={Bitcoin1} alt="" />
                        <img className='position-absolute start-0 top-20 opacity-50 w-25 w-md-100' src={Bitcoin1} alt="" />
                        <img className='position-absolute top-10 end-10  w-25 w-md-100' src={Bitcoin3} alt="" />
                    </div>



                </div>
            </div>
        </div >
    );
};

export default Akacoin;