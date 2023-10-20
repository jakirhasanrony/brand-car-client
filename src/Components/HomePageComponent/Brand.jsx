import { Link } from "react-router-dom";

const Brand = ({ card }) => {
    const { brand_name, image_link, id } = card;
    return (
        <div  >
            <Link to={`/card/${brand_name}`}>
                <div className="card h-[350px]  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image_link} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-gray-500 font-bold">Brand Name: {brand_name}</h2>
                       
                    </div>
                </div>
            </Link>
           
        </div>
    );
};

export default Brand;