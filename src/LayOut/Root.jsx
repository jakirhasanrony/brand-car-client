import { Outlet } from "react-router-dom";
import Navbar from "../SharedElement/Navbar";
import Footer from "../SharedElement/Footer";


const Root = () => {
    return (
        <div  className="font-fontExo mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;