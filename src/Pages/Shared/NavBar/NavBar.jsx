import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  
  const { user, logOut } = useContext(AuthContext);


 

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
  const navItems = (
    <>
      <li className="text-blue-800">
        <Link to="/">Home</Link>
      </li>
      <li className="text-blue-800">
        <Link to="/colleges">Colleges</Link>
      </li>
      <li className="text-blue-800">
        <Link  to="/admission">
          Admission
        </Link>
      </li>
     
      <li className="text-blue-800">
        <Link to="/myadmission">My College</Link>
      </li>
    </>
  );
  return (
   

    <div className="navbar bg-slate-200 ">
  <div className="navbar-start max-w-7xl mx-auto">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
      >
        {navItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">
      Book College
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">{navItems}</ul>
  </div>
  <div className="navbar-end">
  {user?.email ? (
      <>
        <div className="avatar placeholder">
          <div className=" bg-neutral-focus text-neutral-content rounded-full w-8">
            <img
              src={user?.photoURL}
              title={user.displayName}
              alt="User image"
            />
          </div>
            <p className="ms-2">{user.displayName}</p>
        </div>
      
        <button onClick={handleLogOut} className="btn bg-orange-400  border-0 ml-2">
          Logout
        </button>
      </>
    ) : (
      <>
        <button className="btn bg-blue-900 text-white hover:bg-blue-700 border-0 ml-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn ml-2 border-0 bg-[#D36F3F] hover:bg-blue-700 text-white font-bold">
          <Link to="/signup">Register</Link>
        </button>
      </>
    )}
{/*     
    
      <>
        <button className="btn bg-blue-900 text-white hover:bg-blue-700 border-0 ml-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn ml-2 border-0 bg-[#D36F3F] hover:bg-blue-700 text-white font-bold">
          <Link to="/signup">Register</Link>
        </button>
      </> */}
    
  </div>
</div>
  );
};

export default Navbar;
