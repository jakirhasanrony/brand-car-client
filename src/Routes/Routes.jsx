import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorElement from "../ErrorElement/ErrorElement";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/AddProductPage/AddProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import SingleProductDetails from "../Pages/ProductDetails/SingleProductDetails";
import MyCart from "../Pages/MyCart/MyCart";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: () => fetch("/data.json"),

            },
            {
                path: '/card/:brand_name',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch("http://localhost:5000/products"),

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myCart/',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><SingleProductDetails></SingleProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

            },
        ]
    }
]);

export default router;