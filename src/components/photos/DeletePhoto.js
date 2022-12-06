import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

const DeletePhoto = () => {
  const {photoObj: [photoData, setPhotoData]} = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  async function deleteThisPhoto (event) {
    event.preventDefault();
    try {
      const response = await fetch (`
      https://autoplex-webservice.onrender.com/api/photos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })

      const deleteData = await response.json();
      console.log("this is the deleted data", deleteData)
      const otherResponse = await fetch ('https://autoplex-webservice.onrender.com/api/photos/');
      const otherData = await otherResponse.json();
      setPhotoData(otherData);
      navigate('/photos');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button className="delete-bttn" onClick={deleteThisPhoto}>DeleteP</button>
    </div>
  )
};

export default DeletePhoto;