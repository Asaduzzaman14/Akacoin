import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div div className='container'>
            <div className='footer'>

                <div className='row'>

                    {/* 1 */}
                    <div className='col-12 col-lg-4 my-3'>
                        <img src="" alt="" />
                        <li>Living Ecosystem Decentralized Token</li>
                        <div>
                            <h4>icon 1</h4>
                            <h4>icon 2</h4>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='col-12 col-lg-2  my-3'>
                        <h4>Pages</h4>
                        <li>Network Statistic</li>
                        <li>What is AkaCoin</li>
                        <li> Wallets</li>
                        <li>Quick Start Guide</li>
                    </div>

                    {/* 3 */}
                    <div className='col-12 col-lg-2  my-3'>
                        <h4>Learn</h4>
                        <li>Blog</li>
                        <li>Video</li>
                        <li>Product</li>
                        <li>Network states</li>
                    </div>

                    {/* 4 */}
                    <div className='col-12 col-lg-2  my-3'>
                        <h4>Support</h4>
                        <li>Custommer Service</li>
                        <li>FAQ</li>
                        <li>Community</li>
                    </div>

                    {/* 5 */}
                    <div className='col-12 col-lg-2  my-3'>
                        <h4>About AKA.Coin</h4>
                        <li>About us</li>
                        <li>Privacy policy</li>
                        <li>Term of use</li>
                        <li>Quick start guide</li>
                        <li>Language support</li>
                        <li>Cookie policy</li>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Footer;