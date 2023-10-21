import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AllContext } from '../../Providers/AllProvider';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const SingleCartProduct = ({singleProduct}) => {
    const { brand, details, name, photo, price, rating, type, _id } = singleProduct;
    const {uniqueCart, setUniqueCart} = useContext(AllContext);
    const {user} = useContext(AuthContext);
    console.log(user.uid);

    console.log(uniqueCart);
    const handleProductDelete = (id) => {
        const newUniqueCart = uniqueCart.filter(P_id => P_id !== id);
        setUniqueCart(newUniqueCart);

        const user_id = user.uid;
        const newUserCart = {user_id, newUniqueCart}

        fetch(`https://brand-car-server.vercel.app/user-products/${user_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUserCart)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex flex-wrap gap-2 justify-center items-center text-gray-600 font-semibold">
                        <p>Type: {type}</p>
                        <p>Price: {price}</p>

                    </div>
                    <p className="text-center text-gray-600 font-semibold">Ratings out of 5: {rating}</p>
                    <div >
                        <Link >
                            <button onClick={() => handleProductDelete(_id)} className="btn my-4 btn-block bg-gray-500 text-white">Delete Product</button>
                        </Link>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleCartProduct.propTypes = {
    singleProduct: PropTypes.object.isRequired
}

export default SingleCartProduct;