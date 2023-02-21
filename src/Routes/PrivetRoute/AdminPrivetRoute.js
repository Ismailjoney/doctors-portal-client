import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../../context/ContextProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../page/Shared/Loading/Loading';

const AdminPrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthorContext)
    const[isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()
   
    //isAdminLoading use kora hoyce jno reload dile login page a niye na jai abong all users a click korle log in page a niye jai
    if(loading || isAdminLoading){
        return  <Loading></Loading>
    } 

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminPrivetRoute;