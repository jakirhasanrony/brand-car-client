import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorElement from "../ErrorElement/ErrorElement";


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
            }
        ]
    }
]);

export default router;