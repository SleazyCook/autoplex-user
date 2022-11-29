import { useState, useEffect } from 'react';
import { useOutletContext, useParams} from 'react-router-dom';

// getVehicleById

const VehicleDetails = () => {
  const { vehicleObj: [vehicleData, setVehicleData]} = useOutletContext();
  const [vehicle, setVehicle] = useState({});
  const { id } = useParams();

  console.log(id)

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

  useEffect(() => {
    async function getIndivVehicle() {
      try {
        const response = await fetch(`
        https://autoplex-webservice.onrender.com/api/vehicles/${id}`,
        {
          header: {
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


  // async function submitEdit (event) {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch (`
  //     https://autoplex-webservice.onrender.com/api/vehicles/${props.vehicle.id}`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         typeId,
  //         make,
  //         model,
  //         submodel,
  //         engine,
  //         year,
  //         exteriorColor,
  //         interiorColor,
  //         mileage,
  //         vin,
  //         stockNumber,
  //         retailPrice,
  //         inStock,
  //         isFeatured
  //       })
  //     })

  //     // const editResponse = await fetch ('https://autoplex-webservice.onrender.com/api/vehicles')
  //     // const editData = await editResponse.json();
  //     // setVehicles(editResponse.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  if (vehicle.id) { 
    return (
      <div>
        <table>
          <tr>
            <th>Vehice ID</th>
            <td>{vehicle.id}</td>
          </tr>
          <tr>
            <th>Type Id</th>
            <td>{!isEdit ? vehicle.typeId : <input value={inputTypeId} type="text" placeholder={vehicle.typeId}></input>}</td>
          </tr>
          <tr>
            <th>Make</th>
            <td>{!isEdit ? vehicle.make : <input value={inputMake} placeholder={vehicle.make}></input>}</td>
          </tr>
          <tr>
          <th>Model</th>
            <td>{!isEdit ? vehicle.model : <input value={inputModel} placeholder={vehicle.model}></input>}</td>
          </tr>
          <tr>
            <th>Submodel</th>
            <td>{!isEdit ? vehicle.submodel : <input value={inputSubmodel} placeholder={vehicle.submodel}></input>}</td>
          </tr>
          <tr>
            <th>Engine</th>
            <td>{!isEdit ? vehicle.engine : <input value={inputEngine} placeholder={vehicle.engine}></input>}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{!isEdit ? vehicle.year : <input value={inputYear} placeholder={vehicle.year}></input>}</td>
          </tr>
          <tr>
            <th>Ext. Color</th>
            <td>{!isEdit ? vehicle.exteriorColor : <input value={inputExteriorColor} placeholder={vehicle.exteriorColor}></input>}</td>
          </tr>
          <tr>
            <th>Int. Color</th>
            <td>{!isEdit ? vehicle.interiorColor : <input value={inputInteriorColor} placeholder={vehicle.interiorColor}></input>}</td>
          </tr>
          <tr>
            <th>Mileage</th>
            <td>{!isEdit ? vehicle.mileage : <input value={inputMileage} placeholder={vehicle.mileage}></input>}</td>
          </tr>
          <tr>
            <th>VIN</th>
            <td>{!isEdit ? vehicle.VIN : <input value={inputVin} placeholder={vehicle.VIN}></input>}</td>
          </tr>
          <tr>
            <th>Stock #</th>
            <td>{!isEdit ? vehicle.stockNumber : <input value={inputStockNumber} placeholder={vehicle.stockNumber}></input>}</td>
          </tr>
          <tr>
            <th>Retail Price</th>
            <td>{!isEdit ? vehicle.retailPrice : <input value={inputRetailPrice} placeholder={vehicle.retailPrice}></input>}</td>
          </tr>
          <tr>
            <th>In Stock</th>
            <td>{!isEdit ? `${vehicle.inStock}` : <input value={inputInStock} placeholder={`${vehicle.inStock}`}></input>}</td>
          </tr>
          <tr>
            <th>Featured</th>
            <td>{!isEdit ? `${vehicle.isFeatured}` : <input value={inputIsFeatured} placeholder={`${vehicle.isFeatured}`}></input>}</td>
          </tr>
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