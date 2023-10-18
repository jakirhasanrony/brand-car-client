import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorElement from "../ErrorElement/ErrorElement";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/AddProductPage/AddProduct";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: ()=> fetch("/data.json")
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
        ]
    }
]);

export default router;