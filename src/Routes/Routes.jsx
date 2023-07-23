import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/Home/CollegeSection/CollegeDetails";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import Myadmission from "../Pages/Admission/Myadmission";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'profile/:id',
          element: <Profile></Profile>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path:'colleges',
          element: <Colleges></Colleges>,
          loader: () => fetch('http://localhost:5000/colleges')
        },
        {
          path:'/colleges/:id',
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/colleges/details/${params.id}`)
      },
      {
        path:'/admission',
        element: <Admission></Admission>

      },
      {
        path: '/admissionform/:collegeId',
        element: <AdmissionForm></AdmissionForm>
      },
      {
        path: '/myadmission',
        element:<Myadmission></Myadmission>
      }
      ]

    },
  ]);


export default router;