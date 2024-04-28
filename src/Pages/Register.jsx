
import { Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../customHooks/useAuth";


const Register = () => {

  const {createUser, updateUserProfile} = useAuth();
  
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{
    const {email, password,  fullName, image} = data;
    createUser(email, password)
    .then(() => {
      updateUserProfile(fullName, image)
      .then(() =>{
        alert('you have successfully register')
        navigate("/")
      })
    })
    .catch(()=>{
      alert('please try again')
    })
  
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">


          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" className="input input-bordered" {...register("fullName", { required: true })}/>
          {errors.fullName && <span className="text-red-500">This field is required</span>}

          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo url" className="input input-bordered"  {...register("image")}/>
          

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}/>
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
          {errors.password && <span className="text-red-500">please give validate password</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">register</button>
        </div>
      </form>
      <div className="text-center">
        <p>You have an account please <Link to="/login" className="underline text-teal-700 font-bold">Login</Link></p>
     </div>
    </div>
</div>
    );
};

export default Register;