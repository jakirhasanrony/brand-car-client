import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AllContext } from "../../Providers/AllProvider";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const SingleProductDetails = () => {
    const singleProduct = useLoaderData();
    const { _id, name, details, photo } = singleProduct;
    const { uniqueCart, setUniqueCart } = useContext(AllContext);
    const { user } = useContext(AuthContext);

    const handleAddToCart = (id) => {

        if (!uniqueCart.includes(id)) {
            const newUniqueCart = [...uniqueCart, id];
            setUniqueCart(newUniqueCart);

            const user_id = user.uid;
            const cartProduct = { user_id, newUniqueCart };

            fetch(` https://brand-car-server-5ruoo15b2-jakir-hasan-ronys-projects.vercel.app/user-products/${user_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'Added to Cart Successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })
                })
        }
    }

    return (
        <div className="flex justify-center items-center ">
            <div className="p-10 hero max-w-6xl min-h-[70vh]  my-16 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="ml-3">
                        <h1 className="text-3xl text-gray-500 font-bold">{name}</h1>
                        <p className="py-6">{details}</p>
                        <button onClick={() => handleAddToCart(_id)} className="btn btn-block bg-black text-white">Add to Cart </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;