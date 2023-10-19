import { Link } from "react-router-dom";


const SingleBrandProducts = ({ singleProduct }) => {
    const { brand, details, name, photo, price, rating, type, _id } = singleProduct;

    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand}</h2>
                    <div className="flex flex-wrap gap-2 justify-center items-center text-gray-600 font-semibold">
                        <p>Type: {type}</p>
                        <p>Price: {price}</p>

                    </div>
                    <p className="text-center text-gray-600 font-semibold">Ratings out of 5: {rating}</p>
                    <div >
                        <Link to={`/productDetails/${_id}`}>
                            <button className="btn my-4 btn-block bg-gray-500 text-white">Product Details</button>
                        </Link>

                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn mb-4 btn-block bg-gray-500
                         text-white">Update Product</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandProducts;