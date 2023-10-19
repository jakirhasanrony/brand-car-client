import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const singleProduct = useLoaderData();
    const { brand, name, photo, price, rating, type, _id } = singleProduct;



    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;   
        const rating = form.rating.value;


        const updatedProduct = { name, photo, brand, type, price,  rating }
        console.log(updatedProduct);

        // send data to the server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
                form.reset()

            })


    }


    return (
        <div className="max-w-5xl my-10  mx-auto  p-24">
            <h2 className="text-3xl text-center pb-10 font-extrabold">Update Product Here</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form name and image row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input name="name" defaultValue={name} type="text" placeholder="enter product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input name="photo" defaultValue={photo} type="text" placeholder=
                                "enter product image url here" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form brand name and type of product row */}
                <div className=" md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input name="brand" defaultValue={brand} type="text" placeholder="enter product brand name here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input name="type" defaultValue={type} type="text" placeholder="enter type of the product" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form price and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <label className="input-group">
                            <input name="price" defaultValue={price} type="text" placeholder="enter the price of product" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input name="rating" defaultValue={rating} type="text" placeholder="enter the ratings out of 5" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-black text-white" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateProduct;