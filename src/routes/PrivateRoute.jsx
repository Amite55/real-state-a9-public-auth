
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className="text-center my-10">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }
    
    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes ={
    children: PropTypes.object,
}