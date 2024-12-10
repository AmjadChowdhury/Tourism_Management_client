

const AllTouristsSpotZone = ({spot}) => {
    console.log('hello form',spot)
    const {zone,countryName,popular_spot} = spot
    return (
        <div className={`${zone == 'Central Asia'? 'bg-purple-700': zone== 'America'? 'bg-red-700' : zone=='Africa'? 'bg-green-700': zone=='Europe'? 'bg-teal-700' : zone=='Middle East'? 'bg-lime-700' : 'bg-yellow-700'} text-white rounded-lg p-2`}>
            <h1 className="text-3xl font-extrabold text-center mb-2"><span className="border-b-4 border-b-gray-950 rounded-lg">{zone}</span></h1>
            <h3 className="text-2xl font-bold text-center">{countryName}</h3>
            <div >
                {
                    popular_spot.map((pop,idx) => <button 
                    key={idx}
                    className="btn m-2 bg-black text-white">{pop}</button>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpotZone;