import { useLoaderData } from "react-router-dom";
import Brand from "../../Components/HomePageComponent/Brand";
import Banner from "../../Components/HomePageComponent/Banner";

const HomePage = () => {
  
    const cardBrands = useLoaderData();
    // console.log(cardBrands)
  
    return (
        <div>
            <div className="max-w-6xl mt-10 border-8 rounded-lg shadow-lg mx-auto p-8">
                <p className="text-center">hey dark mode</p>
            </div>
            <div className="max-w-6xl border-8 rounded-lg shadow-lg my-4 mx-auto ">
                <Banner></Banner>
            </div>
              <div className="max-w-6xl border-8 rounded-lg shadow-lg mb-8 mx-auto p-8 grid md:grid-cols-2 gap-6">
                {
                    cardBrands.map(card => <Brand
                    key={card.id}
                    card={card}
                    >
                    </Brand>)
                }
            </div>
           
        </div>
    );
};

export default HomePage;