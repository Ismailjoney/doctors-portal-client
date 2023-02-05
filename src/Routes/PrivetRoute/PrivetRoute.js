import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../../context/ContextProvider';
import Loader from '../../Loader/Loader';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthorContext)
    const location = useLocation()
    //privet route a reload dile jate login page a na nei sei jorno use kora hoyece
    if(loading){
        return <Loader></Loader>
    } 

    if(user){
        return children;
    }

    <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRoute;