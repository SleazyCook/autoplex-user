import { useState, useEffect } from 'react';
import { useOutletContext, useParams} from 'react-router-dom';

// getVehicleById

const VehicleDetails = () => {
  const { vehicleObj: [vehicleData, setVehicleData]} = useOutletContext();
  const [vehicle, setVehicle] = useState({});
  const { id } = useParams();

  const [isEdit, setIsEdit] = useState(false);

  const [inputState, setInputState] = useState({
    typeId: "",
    make: "",
    model: "",
    submodel: "",
    engine: "",
    year: "",
    exteriorColor: "",
    interiorColor: "",
    mileage: "",
    vin: "",
    stockNumber: "",
    retailPrice: "",
    inStock: false,
    isFeatured: false
  });

  function handleEdit(id) {
    setIsEdit(true);
  };

  function handleSubmitEdit(id) {
    setIsEdit(false);
  }

  useEffect(() => {
    async function getIndivVehicle() {
      try {
        const response = await fetch(`
        https://autoplex-webservice.onrender.com/api/vehicles/${id}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        });

        const indivData = await response.json();
        setVehicle(indivData);

      } catch (error) {
        console.log(error);
      }
    }
    getIndivVehicle();
  }, []);


  async function submitEdit (event) {
    event.preventDefault();

    const updateFields = {}
    //check to see if a key value is defined during edit, if empty do nothing
    Object.keys(inputState).forEach((key) => {
      if (inputState[key]) {
        updateFields[key] = inputState[key]
      }
    })

    try {
      const response = await fetch (`
      https://autoplex-webservice.onrender.com/api/vehicles/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id,
          fields: updateFields
        })
      })

      const {vehicle} = await response.json();

      const editResponse = await fetch ('https://autoplex-webservice.onrender.com/api/vehicles')
      const editData = await editResponse.json();
      setVehicle(vehicle);
      setVehicleData(editData);
      setIsEdit(false);

    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    if (event.target.type == "checkbox") {
      setInputState({...inputState, [event.target.name]: event.target.checked});
    } else {
      setInputState({...inputState, [event.target.name]: event.target.value});
    }
  };

  if (vehicle.id) { 
    return (
      <div>
        {!isEdit ? <button onClick={handleEdit}>Edit</button> : <button onClick={submitEdit}>Submit Changes</button>}
        <table>
          <tbody>
            <tr>
              <th>Vehice ID</th>
              <td>{vehicle.id}</td>
            </tr>
            <tr>
              <th>Type Id</th>
              <td>{!isEdit ? vehicle.typeId : <input value={inputState.typeId}  onChange={handleChange} name="typeId" type="text" placeholder={vehicle.typeId}></input>}</td>
            </tr>
            <tr>
              <th>Make</th>
              <td>{!isEdit ? vehicle.make : <input value={inputState.make}  onChange={handleChange} name="make" placeholder={vehicle.make}></input>}</td>
            </tr>
            <tr>
            <th>Model</th>
              <td>{!isEdit ? vehicle.model : <input value={inputState.model}  onChange={handleChange} name="model" placeholder={vehicle.model}></input>}</td>
            </tr>
            <tr>
              <th>Submodel</th>
              <td>{!isEdit ? vehicle.submodel : <input value={inputState.submodel}  onChange={handleChange} name="submodel" placeholder={vehicle.submodel}></input>}</td>
            </tr>
            <tr>
              <th>Engine</th>
              <td>{!isEdit ? vehicle.engine : <input value={inputState.engine}  onChange={handleChange} name="engine" placeholder={vehicle.engine}></input>}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{!isEdit ? vehicle.year : <input value={inputState.year}  onChange={handleChange} name="year" placeholder={vehicle.year}></input>}</td>
            </tr>
            <tr>
              <th>Ext. Color</th>
              <td>{!isEdit ? vehicle.exteriorColor : <input value={inputState.exteriorColor}  onChange={handleChange} name="exteriorColor" placeholder={vehicle.exteriorColor}></input>}</td>
            </tr>
            <tr>
              <th>Int. Color</th>
              <td>{!isEdit ? vehicle.interiorColor : <input value={inputState.interiorColor}  onChange={handleChange} name="interiorColor" placeholder={vehicle.interiorColor}></input>}</td>
            </tr>
            <tr>
              <th>Mileage</th>
              <td>{!isEdit ? vehicle.mileage : <input value={inputState.mileage}  onChange={handleChange} name="mileage" placeholder={vehicle.mileage}></input>}</td>
            </tr>
            <tr>
              <th>VIN</th>
              <td>{!isEdit ? vehicle.VIN : <input value={inputState.vin}  onChange={handleChange} name="vin" placeholder={vehicle.VIN}></input>}</td>
            </tr>
            <tr>
              <th>Stock #</th>
              <td>{!isEdit ? vehicle.stockNumber : <input value={inputState.stockNumber}  onChange={handleChange} name="stockNumber" placeholder={vehicle.stockNumber}></input>}</td>
            </tr>
            <tr>
              <th>Retail Price</th>
              <td>{!isEdit ? vehicle.retailPrice : <input value={inputState.retailPrice}  onChange={handleChange} name="retailPrice" placeholder={vehicle.retailPrice}></input>}</td>
            </tr>
            <tr>
              <th>In Stock</th>
              <td>{!isEdit ? `${vehicle.inStock}` : <input checked={inputState.inStock}  onChange={handleChange} name="inStock" placeholder={`${vehicle.inStock}`} type="checkbox"></input>}</td>
            </tr>
            <tr>
              <th>Featured</th>
              <td>{!isEdit ? `${vehicle.isFeatured}` : <input checked={inputState.isFeatured}  onChange={handleChange} name="isFeatured" placeholder={`${vehicle.isFeatured}`} type="checkbox"></input>}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <p>Vehicle inactive.</p>
      </div>
    )
  } 
}

export default VehicleDetails;