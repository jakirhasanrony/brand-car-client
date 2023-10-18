import { NavLink } from "react-router-dom";
import moment from 'moment';

const Navbar = () => {

    const navLinks = <>
    <li><NavLink className="mr-8 text-lg font-bold text-gray-600" to='/'>Home</NavLink></li>
    <li><NavLink className="mr-8 text-lg font-bold text-gray-600" to='/login'>Login</NavLink></li>
    <li><NavLink className="mr-8 text-lg font-bold text-gray-600" to='/registration'>Registration</NavLink></li>
    <li><NavLink className="mr-8 text-lg font-bold text-gray-600" to='/addproduct'> Add Product</NavLink></li>
    <li><NavLink className="mr-8 text-lg font-bold text-gray-600" to='/mycart'>My Cart</NavLink></li>
  



</>
    return (
        <div className="navbar bg-base-100 px-20 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                
                <div className="w-8 md:w-24 rounded-full">
                    <img src="https://i.ibb.co/bJbd7P6/photo-2023-10-18-09-21-55.jpg" alt="" />
                </div>
                <a className="btn btn-ghost normal-case text-xl">BrandCar</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {/* <div className=" navbar-end">
                <a className="btn">Button</a>
                <p className=" md:text-lg md:font-bold text-gray-600">
                    {moment().format("ddd, MMM D, YY, h:mm:ss a")}
                    </p>
            </div> */}
        </div>
    );
};

export default Navbar;