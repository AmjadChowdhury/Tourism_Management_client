import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";


const Home = () => {
    const loadedSpot = useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <div>
                <h1 className="text-center text-2xl font-bold m-3"><span className="border-b-4 border-blue-950 rounded-lg">we should must visit</span></h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {
                    loadedSpot.map(spot => <div key={spot.id} className={`${spot.zone == 'Central Asia'? 'bg-purple-700': spot.zone== 'America'? 'bg-red-700' : spot.zone=='Africa'? 'bg-green-700': spot.zone=='Europe'? 'bg-teal-700' : spot.zone=='Middle East'? 'bg-lime-700' : 'bg-yellow-700'} rounded-lg p-4`}>
                        <h1 className="text-2xl text-white font-bold">{spot.zone}</h1>
                        <h3 className="text-xl font-extrabold text-stone-200">{spot.countryName}</h3>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Home;