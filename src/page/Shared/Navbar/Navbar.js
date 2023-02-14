import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../../../context/ContextProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthorContext)

    const handdleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navItem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appionment">Appionment</Link></li>
        <li><Link to="/about">About</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link to="/dashbord">DashBord</Link></li>
                    <button onClick={handdleLogOut}>Logout</button>
                </>
                :
                <li><Link to="/login">Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <label htmlFor="dashbord-drawer" tabIndex={2} className="btn btn-ghost ml-36 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;