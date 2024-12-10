import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddTouristsSpot = () => {
  const {user} = useContext(AuthContext)

  const handleAddTouristsSpot = e => {
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

    fetch('https://tourism-management-server-bjez74end-amjads-projects-e3710c92.vercel.app/spot',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(spot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Add Tourists Spot!',
          text: 'Successfully create spot..',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })

  }
  return (
    <div>
      <div className="text-center my-4">
        <span className="text-2xl text-blue-700 font-bold border-b-4 border-blue-950 rounded-l-lg rounded-r-lg">Fill up Tourists Spot</span>
      </div>
      <form onSubmit={handleAddTouristsSpot}>
        <div className="flex justify-between gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Image</span>
            </label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-xl">Tourists Spot Name</span>
            </label>
            <input
              type="text"
              placeholder="Spot Name"
              name="spotName"
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
              defaultValue={user.email}
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
              defaultValue={user.displayName}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="mt-2">
           <input className="btn btn-block bg-blue-700 text-white" type="submit" value="Add Tourist Spot" />
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
