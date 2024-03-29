import React from 'react';
import logo from "../../images/Introducing AKACOIN.png"
import Plant from "../../images/Plant Bitcoin.png"
import Bitcoin1 from "../../images/Bitcoin (1).png"
import Bitcoin2 from "../../images/Bitcoin (2).png"
import Bitcoin3 from "../../images/Bitcoin.png"
import rectangle3 from "../../images/Rectangle 3.png"

import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container '>
            <div className='banner-section'>
                <div className='row g-0'>

                    <div className=' col-12 col-lg-6'>
                        <div className='logo-container mt-5'>
                            <img className='logo' src={logo} alt="" />
                        </div>
                        <h2 className='banner-title fs-1'>Living Ecosystem Decentralized Token</h2>
                        <p className=''>Akacoin is a open source peer-to-peer digital currency,community-run technology that supports cryptocurrencies and thousands of decentralized applications.</p>

                        <div className='button-container'>
                            <button className='button button1 '>GET started</button>
                            <button className='button button2'><img src={rectangle3} alt="" /> Git Source</button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 '>
                      <div className='position-relative'>
                        <img className='position-absolute img-fluid end-0 top-20' src={Bitcoin2} alt="" />

                        <img className='position-absolute img-fluid start-0 top-20 ' src={Bitcoin1} alt="" />
                        <img className='position-absolute img-fluid top-50 start-30 ' src={Bitcoin3} alt="" />
                        <img className='w-100 img-fluid' src={Plant} alt="" />

                      </div>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Banner;