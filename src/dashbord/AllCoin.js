import React, { useState } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';



const AllCoin = () => {
    const [datas, setDatas] = useState([])
    fetch('http://localhost:5000/coins')
        .then(response => response.json())
        .then(json => setDatas(json))



    return (
        <div>
            <h2>All Coins</h2>

            <div>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th scope="col">NO.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>{
                        datas.map((data, index) => {
                            return <tr key={data._id} className="align-middle">
                                <th scope="row">{index + 1}</th>
                                <td className='w-25'>{data.name}</td>
                                <td className=''><img className='w-25' src={data.img} alt="" /></td>
                                <td className='fs-5 d-flex gap-3'>   <GrUpdate /> <AiFillDelete className='text-danger' /> </td>
                            </tr>

                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCoin;