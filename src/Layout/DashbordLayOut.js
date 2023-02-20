import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../page/Shared/Navbar/Navbar';

const DashbordLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="dashbord-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashbord'>My Appionments</Link></li>
                        <li><Link to='/dashbord/allusers'>All Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayOut;