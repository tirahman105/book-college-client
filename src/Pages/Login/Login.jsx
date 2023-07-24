import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";



const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {signIn} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";



  const onSubmit = (data) => {
    const { email, password } = data;
  
    console.log(data);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        if (err.code === 'auth/user-not-found') {
          Swal.fire('Error!', 'User does not exist.', 'error');
        } else if (err.code === 'auth/wrong-password') {
          Swal.fire('Error!', 'Invalid password.', 'error');
        } else {
          Swal.fire('Error!', 'Login failed.', 'error');
        }
      });
  };


    

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-full lg:text-left">
            <img src="https://i.ibb.co/mH1K5RZ/login-removebg-preview.png" alt="" />
            
          </div>
          <div className="card md:w-2/3 w-full max-w-sm shadow-2xl bg-base-100">
         
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="mt-4">
                  <input type="checkbox" onChange={toggleShowPassword} />
                  <span className="label-text ml-2">Show password</span>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn  bg-blue-900 text-white hover:bg-blue-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
           
            
            <div className="text-center mt-4">
        <Link to="/forgot-password" className="text-blue-600 underline">
          Forgot Password?
        </Link>
      </div>
            <p className='px-6 text-sm text-center text-gray-400 mb-4'>
          Don't have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-blue-600'
          >
            Sign up
          </Link>
          <GoogleLogin></GoogleLogin>
        </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
