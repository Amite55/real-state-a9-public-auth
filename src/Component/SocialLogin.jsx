import useAuth from "../customHooks/useAuth";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth();
    
    return (
        <div className="flex justify-center gap-4">
            <div>
                <button 
                onClick={()=>googleLogin()}
                className='btn btn-sm border border-white'>Google</button>
            </div>
            <div>
                <button
                onClick={()=> githubLogin()}
                 className='btn btn-sm border border-white'>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;