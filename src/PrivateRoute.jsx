import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './components/providers/AuthProvider';
import Loading from './pages/Loading/Loading';


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading />
    }

    if(user)
    {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;