import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import DeletePhoto from './DeletePhoto';

const PhotoDetails = () => {
  const {photoObj: [photoData, setPhotoData]} = useOutletContext();
  const [photo, setPhoto] = useState({});
  const { id } = useParams();

  const [isEdit, setIsEdit] = useState(false);

  const [inputState, setInputState] = useState({
    vehicleId,
    alt,
    url
  });

  function handleEdit(id) {
    setIsEdit(true);
  }

  useEffect(() => {
    async function getIndivPhoto() {
      try {
        const response = await fetch(`
        https://autoplex-webservice.onrender.com/api/photos/${id}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        });

        const indivData = await response.json();
        setPhoto(indivData);

      } catch (error) {
        console.log(error);
      }
    }
    getIndivPhoto();
  }, []);

  async function submitEdit (event) {
    event.preventDefauly();
    const updateFields = {}
    Object.keys(inputState).forEach((key) => {
      if (inputState[key]) {
        updatefields[key] = inputState[key]
      }
    })

    try {
      const response = await fetch (`
      https://autoplex-webservice.onrender.com/api/photos/`,
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

      const editResponse = await fetch ('https://autoplex-webservice.onrender.com/api/photos');
      const editData = await editResponse.json();
      setPhoto(editData);
      setIsEdit(false);

    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setInputState({...inputState, [event.target.name]: event.target.value});
  };

  if (photo.id) {
    return (
      <div>
        <img src={photo.url} alt={photo.alt} height="300"/>
        <br />
        {!isEdit ? <button onClick={handleEdit}>Edit</button> : <button onClick={submitEdit}>Submit Changes</button>}
        <br />
        <button>Delete</button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>vehicleId</th>
              <th>alt</th>
              <th>url</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>{photo.id}</td>
              
              <td>{!isEdit ? photo.vehicleId : <input value={inputState.vehicleId} onChange={handleChange} name="vehicleId" placeholder={photo.vehicleId}></input>}</td>

              <td>{!isEdit ? photo.alt : <input value={inputState.alt} onChange={handleChange} name="alt" placeholder={photo.alt}></input>}</td>

              <td>{!isEdit ? photo.url : <input value={inputState.url} onChange={handleChange} name="url" placeholder={photo.url}></input>}</td>

              <td><DeletePhoto /></td>

            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <p>Photo inactive.</p>
      </div>
    )
  }
}

export default PhotoDetails;