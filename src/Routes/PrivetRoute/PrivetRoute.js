import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../../context/ContextProvider';
import Loading from '../../page/Shared/Loading/Loading';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthorContext)
    const location = useLocation()
   
    if(loading){
        return <Loading></Loading>
    } 

    if(user){
        return children;
    }

    <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRoute;