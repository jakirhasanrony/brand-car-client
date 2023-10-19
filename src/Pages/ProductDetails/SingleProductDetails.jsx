import { useLoaderData } from "react-router-dom";

const SingleProductDetails = () => {
    const singleProduct = useLoaderData();
    const { brand, name, details, photo, price, rating, type, _id } = singleProduct;

    return (
        <div className="flex justify-center items-center ">
            <div className="p-10 hero max-w-6xl min-h-[70vh] bg-[#F4F3F0] my-16 shadow-lg rounded-lg ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="ml-3">
                        <h1 className="text-3xl text-gray-500 font-bold">{name}</h1>
                        <p className="py-6">{details}</p>
                        <button className="btn btn-block bg-black text-white">Add to Cart </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;