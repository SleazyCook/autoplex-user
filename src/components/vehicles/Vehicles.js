import { useOutletContext, Link } from "react-router-dom";
import VehicleData from './VehicleData';

const Vehicles = () => {

  const {vehicleObj: [{vehicles}, setVehicleData]} = useOutletContext();

  return (
    <div>
      <p> Table for vehicles </p>
      <button>Add Vehicle</button>
      <p>Sort by (cell-forward/backward)</p>
      <p>Do ADD VEHICLE and EDIT VEHICLE look the same?</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>typeId</th>
            <th>make</th>
            <th>model</th>
            <th>submodel</th>
            <th>engine</th>
            <th>year</th>
            <th>exteriorColor</th>
            <th>interiorColor</th>
            <th>mileage</th>
            <th>VIN</th>
            <th>stockNumber</th>
            <th>retailPrice</th>
            <th>inStock</th>
            <th>isFeatured</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody>
        {
          vehicles && !!vehicles.length && vehicles.map((vehicle, idx) => {
            return (
              <VehicleData vehicle = {vehicle} key={idx}/>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Vehicles;