import { Link } from "react-router-dom";

const ListCard = ({ list, setLists }) => {
  const {
    _id,
    image,
    spotName,
    country,
    location,
    description,
    cost,
    season,
    travelTime,
    visitor,
    email,
    name,
  } = list;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
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
        <h2 className="font-extrabold">Short Description : {description}</h2>
        <div>
          <p className="font-extrabold">
            Creator : <span className="text-green-700 text-xl">{name}</span>
          </p>
        </div>
        <div className="flex gap-2">
            <Link><button className="btn bg-cyan-700 text-white flex-1">View Details</button></Link>
            <Link to={`/spot/${_id}`}><button className="btn bg-purple-700 text-white flex-1">Edit</button></Link>
            <Link><button className="btn bg-red-700 text-white flex-1">X</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
