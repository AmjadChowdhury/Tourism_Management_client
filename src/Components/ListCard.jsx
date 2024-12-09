import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListCard = ({ lists, list, setLists }) => {
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = lists.filter((list) => list._id != _id);
              setLists(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body flex flex-col">
      <figure  className="flex-grow">
        <img src={image} alt="Shoes" />
      </figure>
        <div>
          <h2 className="font-extrabold">
            Spot Name : <span className="text-blue-700">{spotName}</span>
          </h2>
          <h2 className="font-extrabold">
            Country : <span className="text-blue-700">{country}</span>
          </h2>
          <h2 className="font-extrabold">
            Location : <span className="text-blue-700">{location}</span>
          </h2>
          <h2 className="font-extrabold">Short Description : {description}</h2>
          <div>
            <p className="font-extrabold">
              Creator : <span className="text-green-700 text-xl">{name}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/details/${_id}`} className="btn bg-cyan-700 text-white flex-1">
              View Details
          </Link>
          <Link to={`/spot/${_id}`} className="btn bg-purple-700 text-white flex-1">
              Edit
          </Link>
          <Link onClick={handleDelete} className="btn bg-red-700 text-white flex-1">
            X
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
