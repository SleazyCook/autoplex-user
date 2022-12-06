import { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const {vehicleObj: [vehicleData, setVehicleData]} = useOutletContext();
  const navigate = useNavigate();
  // database field variables
  const [inputState, setInputState] = useState({
    typeId: 0,
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

  console.log('hello')

  async function addNewInventory (event) {
    event.preventDefault();
    try {
      const response = await fetch('https://autoplex-webservice.onrender.com/api/vehicles', 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          vehicle: {
            typeId,
            make,
            model,
            submodel,
            engine,
            year,
            exteriorColor,
            interiorColor,
            mileage,
            vin,
            stockNumber,
            retailPrice,
            inStock,
            isFeatured
          }
        })
      });
      const data = await response.json();
      setVehicleData([...vehicleData, data])
      // if (data.id){
      //   navigate('/inventory');
      // }
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

  return (
    <div>
      AddVehicle form
      <form onSubmit={addNewInventory}>

        <label>Type Id</label>
        <input value={inputState.typeId} onChange={handleChange} name="typeId" placeholder="1" type="text"></input>
        <br />

        <label>Make</label>
        <input value={inputState.make} onChange={handleChange} name="make" placeholder="Honda" type="text"></input>
        <br />

        <label>Model</label>
        <input value={inputState.model} onChange={handleChange} name="model" placeholder="Civic" type="text"></input>
        <br />

        <label>Submodel</label>
        <input value={inputState.submodel} onChange={handleChange} name="submodel" placeholder="Si Sedan" type="text"></input>
        <br />

        <label>Engine</label>
        <input value={inputState.engine} onChange={handleChange} name="engine" placeholder="4-Cylinder" type="text"></input>
        <br />

        <label>Year</label>
        <input value={inputState.year} onChange={handleChange} name="year" placeholder="2019" type="text"></input>
        <br />

        <label>Ext.Color</label>
        <input value={inputState.exteriorColor} onChange={handleChange} name="exteriorColor" placeholder="Galaxy Blue" type="text"></input>
        <br />

        <label>Int. Color</label>
        <input value={inputState.interiorColor} onChange={handleChange} name="interiorColor" placeholder="Grey" type="text"></input>
        <br />

        <label>Mileage</label>
        <input value={inputState.mileage} onChange={handleChange} name="mileage" placeholder="60,000" type="text"></input>
        <br />

        <label>VIN</label>
        <input value={inputState.vin} onChange={handleChange} name="vin" placeholder="12341234123412341" type="text"></input>
        <br />

        <label>Stock #</label>
        <input value={inputState.stockNumber} onChange={handleChange} name="stockNumber" placeholder="1234123412341" type="text"></input>
        <br />

        <label>Retail Price</label>
        <input value={inputState.retailPrice} onChange={handleChange} name="retailPrice" placeholder="$20,000" type="text"></input>
        <br />

        <label>In Stock</label>
        <input checked={inputState.inStock} onChange={handleChange} name="inStock" type="checkbox"></input>
        <br />

        <label>Featured</label>
        <input checked={inputState.isFeatured} onChange={handleChange} name="isFeatured" type="checkbox"></input>
        <br />

        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  )
}

export default AddVehicle;