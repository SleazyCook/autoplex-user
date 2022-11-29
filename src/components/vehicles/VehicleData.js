import { useState } from 'react';

const VehicleData = ({vehicle}) => {
  
  // default values
  const [typeId, setTypeId] = useState(vehicle.id);
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

  // input values
  const [inputTypeId, setInputTypeId] = useState("");
  const [inputMake, setInputMake] = useState("");
  const [inputModel, setInputModel] = useState("");
  const [inputSubmodel, setInputSubmodel] = useState("");
  const [inputEngine, setInputEngine] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputExteriorColor, setInputExteriorColor] = useState("");
  const [inputInteriorColor, setInputInteriorColor] = useState("");
  const [inputMileage, setInputMileage] = useState("");
  const [inputVin, setInputVin] = useState("");
  const [inputStockNumber, setInputStockNumber] = useState("");
  const [inputRetailPrice, setInputRetailPrice] = useState("");
  const [inputInStock, setInputInStock] = useState("");
  const [inputIsFeatured, setInputIsFeatured] = useState("");

  const [isEdit, setIsEdit] = useState(false);

  function handleEdit(id) {
    setIsEdit(true);
  };

  function handleSubmitEdit(id) {
    setIsEdit(false);
  }

  return (
      <tr>

        <td>{vehicle.id}</td>

        <td>{!isEdit ? vehicle.typeId : <input value={inputTypeId} type="text" placeholder={vehicle.typeId}></input>}</td>

        <td>{!isEdit ? vehicle.make : <input value={inputMake} placeholder={vehicle.make}></input>}</td>

        <td>{!isEdit ? vehicle.model : <input value={inputModel} placeholder={vehicle.model}></input>}</td>

        <td>{!isEdit ? vehicle.submodel : <input value={inputSubmodel} placeholder={vehicle.submodel}></input>}</td>

        <td>{!isEdit ? vehicle.engine : <input value={inputEngine} placeholder={vehicle.engine}></input>}</td>

        <td>{!isEdit ? vehicle.year : <input value={inputYear} placeholder={vehicle.year}></input>}</td>

        <td>{!isEdit ? vehicle.exteriorColor : <input value={inputExteriorColor} placeholder={vehicle.exteriorColor}></input>}</td>

        <td>{!isEdit ? vehicle.interiorColor : <input value={inputInteriorColor} placeholder={vehicle.interiorColor}></input>}</td>

        <td>{!isEdit ? vehicle.mileage : <input value={inputMileage} placeholder={vehicle.mileage}></input>}</td>

        <td>{!isEdit ? vehicle.VIN : <input value={inputVin} placeholder={vehicle.VIN}></input>}</td>

        <td>{!isEdit ? vehicle.stockNumber : <input value={inputStockNumber} placeholder={vehicle.stockNumber}></input>}</td>

        <td>{!isEdit ? vehicle.retailPrice : <input value={inputRetailPrice} placeholder={vehicle.retailPrice}></input>}</td>

        <td>{!isEdit ? `${vehicle.inStock}` : <input value={inputInStock} placeholder={`${vehicle.inStock}`}></input>}</td>

        <td>{!isEdit ? `${vehicle.isFeatured}` : <input value={inputIsFeatured} placeholder={`${vehicle.isFeatured}`}></input>}</td>

        <td>
          {!isEdit ? 
          <button onClick={ () => {
            handleEdit(vehicle.id)
          }}>Edit</button>
          :
          <button onClick={ () => {
            handleSubmitEdit(vehicle.id)
          }}>Submit Changes</button>}
        </td>

        <td><button>DELETE</button></td>

      </tr>
  )
}

export default VehicleData;