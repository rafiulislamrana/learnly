import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)

    const loaction = useLocation()
    
    if(loading){
        return <><div className=" h-96 w-full flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div></>;
    }

    if(user){
        return children;
    }
    return <Navigate state={loaction.pathname} to="/login"></Navigate>
};

export default PrivateRoute;