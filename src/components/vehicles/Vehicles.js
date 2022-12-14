import { useOutletContext, Link } from "react-router-dom";

const Vehicles = () => {
  const {vehicleObj: [{vehicles}, setVehicleData]} = useOutletContext();

  // console.log(vehicles)

  return (
    <div>
      <p> Table for vehicles </p>
      <Link to="./add-new"><button>Add Vehicle</button></Link>
      <p>Sort by (cell-forward/backward)</p>
      <p>COMPLETE INVENTORY HISTORY, ACTIVE AND INACTIVE</p>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {
          vehicles && !!vehicles.length && vehicles.map((vehicle, idx) => {
            return (
              
              <tr key={idx}>
                <td>{vehicle.id}</td>
                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.year}</td>
                <td><Link to={`./${vehicle.id}`}><button>View</button></Link></td>
              </tr>

            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Vehicles;


// {
//   vehicles && !!vehicles.length && vehicles.map((vehicle, idx) => {
//     return (
//       <VehicleData vehicle = {vehicle} key={idx}/>
//     )
//   })
// }