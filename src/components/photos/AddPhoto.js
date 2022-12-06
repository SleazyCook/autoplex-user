import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const AddPhoto = () => {
  const {photoObj: [photoData, setPhotoData]} = useOutletContext();
  const navigate = useNavigate();

  const [inputState, setInputState] = useState({
    vehicleId: 0,
    alt: "",
    url: ""
  });

  console.log('what is up, lets add a photo together');

  async function addNewPhoto (event) {
    event.preventDefault();
    try {
      const response = await fetch('https://autoplex-webservice.onrender.com/api/photos',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          photo: {
            vehicleId,
            alt,
            url
          }
        })
      });
      const data = await response.json();
      setPhotoData([...photoData, data])
      if (data.vehicleId) {
        navigate('/photos');
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(event) {
    setInputState({...inputState, [event.target.name]: event.target.value});
  };

  return (
    <div>
      AddPhoto form
      <form>
        <label>VehicleId</label>
        <input value={inputState.vehicleId} onChange={handleChange} name="vehicleId" placeholder="1" type="text"></input>
        <br />

        <label>Image Description</label>
        <input value={inputState.alt} onChange={handleChange} name="alt" placeholder="Honda Civic, front" type="text"></input>
        <br />

        <label>Image URL</label>
        <input value={inputState.url} onChange={handleChange} name="url" placeholder="honda-civic-front.png" type="text"></input>
        <br />

        <button type="submit">Add Photo</button>
      </form>
    </div>
  )
}

export default AddPhoto;