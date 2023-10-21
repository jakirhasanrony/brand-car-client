import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { AllContext } from "../../Providers/AllProvider";
import SingleCartProduct from "./SingleCartProduct";

const MyCart = () => {

    const {user} = useContext(AuthContext);
    const {uniqueCart, setUniqueCart} = useContext(AllContext);
    const allProducts = useLoaderData();

    useEffect(() => {
        fetch(`https://brand-car-server.vercel.app/user-products/${user.uid}`)
        .then(res => res.json())
        .then(data => setUniqueCart(data.newUniqueCart))
    }, [user, setUniqueCart])

    console.log(uniqueCart);
    console.log(user.uid);
    const userCartList = allProducts.filter(product => uniqueCart.includes(product._id));


    return (
        <div>
            <div className="max-w-6xl mt-10 border-8 rounded-lg shadow-lg  mx-auto p-8 flex justify-center items-center">
                <h2 className="mr-2 text-4xl font-extrabold">Your Selected Products</h2>
                
            </div>
            <div className="grid border-8 shadow-lg rounded-lg my-10 lg:grid-cols-2 gap-5 justify-center items-center max-w-6xl mx-auto p-8">
                {
                    userCartList?.map(singleProduct => <SingleCartProduct key={singleProduct._id} singleProduct={singleProduct}></SingleCartProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;