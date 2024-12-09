import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const loadedDetails = useLoaderData()
    const {
        image,
        spotName,
        country,
        location,
        description,
        cost,
        season,
        travelTime,
        visitor,
        name,
      } = loadedDetails;
    return (
        <div className="card card-compact bg-base-100 w-3/4 m-auto shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body m-5">
        <div className="">
          <h2 className="font-extrabold">
            Spot Name : <span className="text-blue-700">{spotName}</span>
          </h2>
          <h2 className="font-extrabold">
            Country : <span className="text-blue-700">{country}</span>
          </h2>
          <h2 className="font-extrabold">
            Location : <span className="text-blue-700">{location}</span>
          </h2>
          <h2 className="font-extrabold">
            Total Cost : <span className="text-blue-700">{cost}</span>
          </h2>
          <h2 className="font-extrabold">
            Season : <span className="text-blue-700">{season}</span>
          </h2>
          <h2 className="font-extrabold">
            Travel Time : <span className="text-blue-700">{travelTime}</span>
          </h2>
          <h2 className="font-extrabold">
            Total Visitor : <span className="text-blue-700">{visitor}</span>
          </h2>
          <h2 className="font-extrabold">Short Description : {description}</h2>
          <div>
            <p className="font-extrabold">
              Creator : <span className="text-green-700 text-xl">{name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ViewDetails;