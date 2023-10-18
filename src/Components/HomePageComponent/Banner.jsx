import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="rounded-lg">
            <div className="hero h-[500px] " style={{ backgroundImage: 'url(https://i.ibb.co/rwWW3Mp/pagani-huayra.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Welcome to the ultimate destination for automotive enthusiasts and car lovers alike. Our website is your key to unlocking a world of automotive dreams. Whether you are in pursuit of sleek, high-performance machines that will leave your heart racing, or you prefer the classic elegance of timeless automobiles, we have got it all.</p>
                        <Link to="/login">
                            <button className="btn btn-primary">To purchase First login please</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;