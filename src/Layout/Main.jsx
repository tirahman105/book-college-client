import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/NavBar";




const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};
export default Main;