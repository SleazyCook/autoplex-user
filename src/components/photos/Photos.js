import { useOutletContext, Link } from 'react-router-dom';

const Photos = () => {
  const {photoObj: [photoData, setPhotoData]} = useOutletContext();

  console.log(photoData)

  return (
    <div>
      Photos
      <p>Sort by (cell-forward/backward)</p>
      <p>When click on preview, open image up</p>
      <p>Preivew button toggles to delete on edit?</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>vehicleId</th>
            <th>alt</th>
            <th>url</th>
            <th>Preview</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            photoData && !!photoData.length && photoData.map((photo, idx) => {
              return (
                
                <tr key={idx}>
                  <td>{photo.id}</td>
                  <td>{photo.vehicleId}</td>
                  <td>{photo.alt}</td>
                  <td>{photo.url}</td>
                  <td><button>Preview</button></td>
                  <td><button>Edit</button></td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Photos;