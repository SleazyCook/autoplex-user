import { useOutletContext, Link } from 'react-router-dom';

const Photos = () => {
  const {photoObj: [photoData, setPhotoData]} = useOutletContext();
  // console.log(photoData)
  return (
    <div>
      Photos
      <p>Sort by (cell-forward/backward)</p>
      <p>When click on preview, open image up</p>
      <p>Preivew button toggles to delete on edit?</p>

      <Link to="./add-new"><button>Add Photo</button></Link>
      
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>vehicleId</th>
            <th>alt</th>
            <th>url</th>
            <th>Details</th>
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
                  <td><Link to={`./${photo.id}`}><button>View</button></Link></td>
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