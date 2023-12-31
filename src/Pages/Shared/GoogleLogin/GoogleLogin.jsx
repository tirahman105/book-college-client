import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc'
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    console.log('clicked')
    googleSignIn()
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch('https://book-college-server-amber.vercel.app/users', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
          })
              .then(res => res.json())
              .then(() => {
                                    
                      navigate(from, { replace: true });
                  })
              })
       

}
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
      <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        
      </div>
    </div>
  );
};

export default GoogleLogin;
