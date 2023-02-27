import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthorContext } from '../context/ContextProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../page/Shared/Navbar/Navbar';

const DashbordLayOut = () => {
    const { user } = useContext(AuthorContext)
    const [isAdmin] = useAdmin(user?.email)


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
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashbord/allusers'>All Users</Link></li>
                                <li><Link to='/dashbord/adddoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashbord/managedoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayOut;