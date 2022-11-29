import { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const {vehicleObj: [vehicleData, setVehicleData]} = useOutletContext();
  const navigate = useNavigate();
  // database field variables
  const [typeId, setTypeId] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [submodel, setSubmodel] = useState("");
  const [engine, setEngine] = useState("");
  const [year, setYear] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [stockNumber, setStockNumber] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const [isFeatured, setIsFeatured] = useState("");

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
      setVehicleData([...vehciles, data])
      // if (data.id){
      //   navigate('/inventory');
      // }
    } catch (error) {
      console.log(error);
    }
  }

  function updateTypeId(event) {
    setTypeId(event.target.value)
  }

  function updateMake(event) {
    setMake(event.target.value)
  }

  function updateModel(event) {
    setModel(event.target.value)
  }

  function updateSubmodel(event) {
    setSubmodel(event.target.value)
  }

  function updateEngine (event) {
    setEngine(event.target.value)
  }

  function updateYear (event) {
    setYear(event.target.value)
  }

  function updateExteriorColor (event) {
    setExteriorColor(event.target.value)
  }

  function updateInteriorColor (event) {
    setInteriorColor(event.target.value)
  }

  function updateMileage (event) {
    setMileage(event.target.value)
  }

  function updateVin (event) {
    setVin(event.target.value)
  }

  function updateStockNumber (event) {
    setStockNumber(event.target.value)
  }

  function updateRetailPrice (event) {
    setRetailPrice(event.target.value)
  }

  function updateInStock (event) {
    setInStock(event.target.checked)
  }

  function updateIsFeatured (event) {
    setIsFeatured(event.target.checked)
  }

  return (
    <div>
      AddVehicle form
      <form onSubmit={addNewInventory}>

        <label>Type Id</label>
        <input value={typeId} onChange={updateTypeId} placeholder="1" type="text"></input>
        <br />

        <label>Make</label>
        <input value={make} onChange={updateMake} placeholder="Honda" type="text"></input>
        <br />

        <label>Model</label>
        <input value={model} onChange={updateModel} placeholder="Civic" type="text"></input>
        <br />

        <label>Submodel</label>
        <input value={submodel} onChange={updateSubmodel} placeholder="Si Sedan" type="text"></input>
        <br />

        <label>Engine</label>
        <input value={engine} onChange={updateEngine} placeholder="4-Cylinder" type="text"></input>
        <br />

        <label>Year</label>
        <input value={year} onChange={updateYear} placeholder="2019" type="text"></input>
        <br />

        <label>Ext.Color</label>
        <input value={exteriorColor} onChange={updateExteriorColor} placeholder="Galaxy Blue" type="text"></input>
        <br />

        <label>Int. Color</label>
        <input value={interiorColor} onChange={updateInteriorColor} placeholder="Grey" type="text"></input>
        <br />

        <label>Mileage</label>
        <input value={mileage} onChange={updateMileage} placeholder="60,000" type="text"></input>
        <br />

        <label>VIN</label>
        <input value={vin} onChange={updateVin} placeholder="12341234123412341" type="text"></input>
        <br />

        <label>Stock #</label>
        <input value={stockNumber} onChange={updateStockNumber} placeholder="1234123412341" type="text"></input>
        <br />

        <label>Retail Price</label>
        <input value={retailPrice} onChange={updateRetailPrice} placeholder="$20,000" type="text"></input>
        <br />

        <label>In Stock</label>
        <input value={inStock} onChange={updateInStock} type="checkbox"></input>
        <br />

        <label>Featured</label>
        <input value={isFeatured} onChange={updateIsFeatured} type="checkbox"></input>
        <br />

        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  )
}

export default AddVehicle;