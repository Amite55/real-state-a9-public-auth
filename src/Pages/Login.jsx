
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Component/SocialLogin";
import useAuth from "../customHooks/useAuth";
import { useEffect } from "react";


 


const Login = () => {

  const {signInUser, user} = useAuth();

  const location = useLocation();
  console.log(location.state)
  const navigate = useNavigate();

  const from = location.state || "/";


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {

    const {email, password} = data;
    signInUser(email, password)
    .then(result => {
      console.log(result.user)
  })
    .catch(error => {
      console.log(error)
      alert('Your email and password wrong')
    })
  }

    useEffect(()=> {
      if(user){
        alert('your login successfully')
       
        navigate(from)
      }
    },[user, navigate, from])

    return (
<>

<div className="hero min-h-screen bg-base-200">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}  />
          {errors.email && <span className="text-rose-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"{...register("password", { required: true })} />
          {errors.password && <span className="text-rose-500">Please give validate password</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
     <div className="text-center">
        <p>You have an not account please <Link to="/register" className="underline text-teal-700 font-bold">Register</Link></p>
     </div>
    </div>
</div>
 
</>
    );
};

export default Login;