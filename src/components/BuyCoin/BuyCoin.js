import React, { useEffect, useState } from 'react';
import coin1 from "../../images/coin1.jpg"
import coin2 from "../../images/coin2.jpg"
import coin3 from "../../images/coin3.jpg"
import coin4 from "../../images/coin4.jpg"
import './BuyCoin.css'


const BuyCoin = () => {
    // const [datas, setDatas] = useState([])

    const datas = [
        {
            "_id": "1",
            "img": "https://i.ibb.co/rdFJFMR/coin1.jpg",
            "name": "Gold-color-bitcoin"
        },
        {
            "_id": "2",
            "img": "https://i.ibb.co/gv0KbYb/coin2.jpg",
            "name": "Gold-color-bitcoin"
        },
        {
            "_id": "3",
            "img": "https://i.ibb.co/7GLrBt9/coin3.jpg",
            "name": "Gold-color-bitcoin"
        },
        {
            "_id": "4",
            "img": "https://i.ibb.co/Qjr5gjB/coin4.jpg",
            "name": "Gold-color-bitcoin"
        },
    ]

    // useEffect(() => {
    //     fetch(' http://localhost:5000/coins')
    //         .then(response => response.json())
    //         .then(json => setDatas(json))
    // }, [])


    return (
        <div className='container mt-5'>
            <h2 className='mb-4 text-center'>Buy your coin</h2>
            <div className="row d-flex justify-content-center gap-3">
                {
                    datas.map(data => {
                        return <div key={data._id} className='coin-card col-12 col-md-6 col-lg-3'>
                            <div className=''>
                                <img className='w-50' src={data.img} alt="" />
                            </div>
                            <h5 className='card-title'>Name: {data.name}</h5>
                            <button className='bg-danger px-4 py-1 text-white border-0'>Buy</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default BuyCoin;