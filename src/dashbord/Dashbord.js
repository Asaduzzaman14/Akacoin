import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <div class="d-flex" id="wrapper">
                {/* <!-- Sidebar --> */}
                <div class="" id="sidebar-wrapper">
                    <div class="bg-primary list-group list-group-flush my-3">
                        <Link to="addcard" class="list-group-item  fw-bold">ADD WALLET</Link>
                        <Link to="mycard" class="list-group-item  fw-bold">MY CARD</Link>
                        <Link to="mycard" class="list-group-item  fw-bold">ADMIN</Link>
                        <Link to="allcoin" class="list-group-item  fw-bold">ALL COIN</Link>
                        <Link to="addcoin" class="list-group-item  fw-bold">ADD COIN</Link>
                    </div>
                </div>
                {/* <!-- /#sidebar-wrapper --> */}

                {/* <!-- Page Content --> */}
                <div className='w-75 mx-auto' id="page-content-wrapper">

                    {/* <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                            <h2 class="fs-2 m-0">Dashboard</h2>
                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        <i class="fas fa-user me-2"></i>John Doe
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav> */}

                    <div class=" text-center px-4">

                        <h2 >WELCOME TO DASHBORD</h2>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div >
            {/* <!-- /#page-content-wrapper --> */}
        </div >

    );
};

export default Dashbord;