import { useLoaderData } from "react-router-dom";
import Brand from "../../Components/HomePageComponent/Brand";
import Banner from "../../Components/HomePageComponent/Banner";

const HomePage = () => {
    const cardBrands = useLoaderData();
    return (
        <div>
            <div className="max-w-6xl mx-auto p-8">
                <Banner></Banner>
            </div>
              <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-6">
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