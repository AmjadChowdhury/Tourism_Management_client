

const ListCard = ({list,setLists}) => {
    const {_id,image,spotName,country,location,description,cost,season,travelTime,visitor,email,name} = list
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">Spot Name : <span className="text-blue-700">{spotName}</span></h2>
        <h2 className="card-title font-extrabold">Country : <span className="text-blue-700">{country}</span></h2>
        <h2 className="card-title font-extrabold">Location : <span className="text-blue-700">{location}</span></h2>
        <h2 className="card-title font-extrabold">Total Cost : <span className="text-blue-700">{cost}</span></h2>
        <h2 className="card-title font-extrabold">Season : <span className="text-blue-700">{season}</span></h2>
        <h2 className="card-title font-extrabold">Travel Time : <span className="text-blue-700">{travelTime}</span></h2>
        <p>{description}</p>
        <div>
            <p className="text-xl font-bold">Creator : <span className="text-green-700">{name}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
