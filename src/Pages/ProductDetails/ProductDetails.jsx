import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBrandProducts from "./singleBrandProducts";

const ProductDetails = () => {
    const { brand_name } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:5000/products";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const filteredProducts = products.filter((product) =>
        product.brand === brand_name);
    console.log(filteredProducts)
    console.log(products)

    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const carousel = () => {
            const x = document.getElementsByClassName("mySlides");
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            setMyIndex((prevIndex) => (prevIndex + 1) % x.length);
            x[myIndex].style.display = "block";
        };

        const interval = setInterval(carousel, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [myIndex]);
    return (
        <div>
            <div>
            <h2 className="text-center text-6xl mb-10 p-10 shadow-lg font-extrabold">Brand is: {brand_name}</h2>
            </div>
            <div className="w3-content w3-section mx-auto border-8 shadow-lg rounded-lg " style={{ maxWidth: '60vw' }}>
                <img className="mySlides rounded-lg" src="https://i.ibb.co/DbQB0dj/photo-2023-10-19-09-39-11.jpg" alt="Los Angeles" />
                <img className="mySlides rounded-lg" src="https://i.ibb.co/qR4WhW1/photo-2023-10-19-09-44-33.jpg" alt="Los Angeles" />
                <img className="mySlides rounded-lg" src="https://i.ibb.co/bBkKKjF/photo-2023-10-19-09-45-31.jpg" alt="Los Angeles" />
               
            </div>
            <div>
                
                <div className="grid border-8 shadow-lg rounded-lg my-10 lg:grid-cols-2 gap-5 justify-center items-center max-w-6xl mx-auto p-8">

                    {
                        filteredProducts.length === 0 ? (
                            (
                                <div className="flex h-[300px] lg:h-[500px] 8 mx-auto lg:mr-[-500px] justify-center items-center">
                                    <p className="lg:text-6xl text-center font-extrabold">This Brands Product is Currently Unavailable</p>

                                </div>
                            )


                        ) : (
                            filteredProducts.map(singleProduct => <SingleBrandProducts
                                key={singleProduct._id}
                                singleProduct={singleProduct}>

                            </SingleBrandProducts>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;