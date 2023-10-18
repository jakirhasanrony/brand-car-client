import { Outlet } from "react-router-dom";
import Header from "../SharedElement/Header";
import Navbar from "../SharedElement/Navbar";
import Footer from "../SharedElement/Footer";


const Root = () => {
    return (
        <div  className="font-fontExo mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;