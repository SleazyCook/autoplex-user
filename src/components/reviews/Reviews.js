import { useOutletContext} from 'react-router-dom';
import DeleteReview from './DeleteReview';

const Reviews = () => {
  const {reviewObj: [{reviews}, setReviewData]} = useOutletContext();

  return (
    <div>
      Reviews
      <p>Sort by (cell-forward/backward)</p>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>customer name</th>
            <th>quote</th>
            <th>imgAlt</th>
            <th>imgUrl</th>
            <th>Preivew Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            reviews && !!reviews.length && reviews.map((review, idx) => {
              return (
                
                <tr key={idx}>
                  <td>{review.id}</td>
                  <td>{review.name}</td>
                  <td>{review.quote}</td>
                  <td>{review.imgAlt}</td>
                  <td>{review.imgUrl}</td>
                  <td><button>Preview</button></td>
                  <td><button>Edit</button></td>
                  <td><DeleteReview /></td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Reviews;