
import Swal from 'sweetalert2'
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;
    

        const newProduct = { name, photo, brand, type, price, details, rating }
        console.log(newProduct);

        // send data to the server
        fetch(' https://brand-car-server-5ruoo15b2-jakir-hasan-ronys-projects.vercel.app/products', {
            method: "POST",
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)       
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                     
                }
                form.reset()

            })


    }
   
    return (
        <div className="max-w-5xl my-10  mx-auto  p-24">
            <h2 className="text-xl md:text-3xl text-center pb-10 font-extrabold">Add Product Here</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and image row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input name="name" type="text" required placeholder="enter product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <label className="input-group">
                            <input name="photo" type="text" required placeholder= 
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
                            <input name="brand" type="text" required placeholder="enter product brand name here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input name="type" type="text" required placeholder="enter type of the product" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form price and short description row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <label className="input-group">
                            <input name="price" type="text" required placeholder="enter the price of product" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-0 md:ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input name="details" type="text" required placeholder="enter the description of the product" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form ratings row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input name="rating" type="text" required placeholder="enter the ratings out of 5" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input className="btn btn-block bg-black text-white" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;