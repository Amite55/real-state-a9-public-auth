import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state || "/";

    const handleSocialLogin = (socialProvider) => {
        socialProvider()
        .then(result => {
            console.log(result.user)
           if(result.user){
            navigate(from)
           }
        })
    }

    return (
        <div className="flex justify-center gap-4">
            <div>
                <button 
                onClick={()=>  handleSocialLogin(googleLogin)}
                className='btn btn-sm border border-white'>Google</button>
            </div>
            <div>
                <button
                onClick={()=> handleSocialLogin(githubLogin)}
                 className='btn btn-sm border border-white'>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;