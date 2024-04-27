import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";


const useAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useAuth;