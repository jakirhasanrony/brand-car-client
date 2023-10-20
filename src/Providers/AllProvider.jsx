import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AllContext = createContext(null);

const AllProvider = ({children}) => {

    const [uniqueCart, setUniqueCart] = useState([]);
    // const [allProducts, setAllProducts] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setAllProducts(data))
    // }, [])


    const allData = {
        // allProducts,
        uniqueCart,
        setUniqueCart,
    }
    return (
        <AllContext.Provider value={allData}>
            {children}
        </AllContext.Provider>
    );
};

AllProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AllProvider;