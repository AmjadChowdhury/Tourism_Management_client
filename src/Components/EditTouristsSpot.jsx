import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditTouristsSpot = () => {
  const loadedSpot = useLoaderData();
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
  } = loadedSpot;

  const handleEditTouristsSpot = e => {
    e.preventDefault()
    const form = e.target
    const image = form.image.value
    const spotName = form.spotName.value
    const country = form.country.value
    const location = form.location.value
    const description = form.description.value
    const cost = form.cost.value
    const season = form.season.value
    const travelTime = form.travelTime.value
    const visitor = form.visitor.value
    const email = form.email.value
    const name = form.name.value
    const spot = {image,spotName,country,location,description,cost,season,travelTime,visitor,email,name}
    console.log(spot)
    fetch(`https://tourism-last-try-ovvr-r1w7cc2yn-amjads-projects-e3710c92.vercel.app/spot/${_id}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(spot)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Edit Done!',
                text: `${name} complete your job successfully`,
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })
  }
  return (
    <div>
      <div className="text-center my-4">
        <span className="text-2xl text-blue-700 font-bold border-b-4 border-blue-950 rounded-l-lg rounded-r-lg">
          Edit Tourists Spot
        </span>
      </div>
      <form onSubmit={handleEditTouristsSpot}>
        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Image</span>
            </label>
            <input
              type="text"
              placeholder="image"
              name="image"
              defaultValue={image}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">
                Tourists Spot Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Spot Name"
              name="spotName"
              defaultValue={spotName}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Country</span>
            </label>
            <input
              type="text"
              placeholder="Country Name"
              name="country"
              defaultValue={country}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Location</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              name="location"
              defaultValue={location}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Description</span>
            </label>
            <input
              type="text"
              placeholder="short description"
              name="description"
              defaultValue={description}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Average Cost</span>
            </label>
            <input
              type="text"
              placeholder="cost"
              name="cost"
              defaultValue={cost}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Season</span>
            </label>
            <input
              type="text"
              placeholder="Winter or Summer"
              name="season"
              defaultValue={season}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Travel Time</span>
            </label>
            <input
              type="text"
              placeholder="Travel time"
              name="travelTime"
              defaultValue={travelTime}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Visitor</span>
            </label>
            <input
              type="text"
              placeholder="Visitor per year"
              name="visitor"
              defaultValue={visitor}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="User email"
              name="email"
              defaultValue={email}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Name</span>
            </label>
            <input
              type="text"
              placeholder="user name"
              name="name"
              defaultValue={name}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="mt-2">
          <input
            className="btn btn-block bg-blue-700 text-white"
            type="submit"
            value="Edit Tourist Spot"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTouristsSpot;
