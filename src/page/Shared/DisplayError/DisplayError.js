import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthorContext } from '../../../context/ContextProvider';
import Loading from '../Loading/Loading';

const DisplayError = () => {
    const error = useRouteError()
    const {   logout, isLoading } = useContext(AuthorContext)
    const navigate = useNavigate()

    const handdleLogOut = () => {
        logout()
            .then(() => {
                navigate('/')
             })
            .catch(err => console.log(err))
    }

    if(isLoading){
        return <Loading></Loading>
    }
     

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <h2 className="text-3xl text-red-400">Please  <button className='btn btn-sm' onClick={handdleLogOut}>Logout</button> and log in back</h2>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
        </div>
    );
};

export default DisplayError;