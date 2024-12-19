import { useLoaderData } from "react-router-dom";
import AllTouristsSpotZone from "./AllTouristsSpotZone";

const AllTouristsSpot = () => {
    const loadedSpot = useLoaderData()
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center text-blue-700 my-4"><span className="border-b-4 border-b-blue-950 rounded-lg">Tourist spot</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    loadedSpot?.map(spot => <AllTouristsSpotZone 
                        key={spot.id} 
                        spot={spot}></AllTouristsSpotZone>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;