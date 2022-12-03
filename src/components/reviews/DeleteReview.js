import { useNavigate, useOutletContext } from 'react-router-dom';

const DeleteReview = () => {
  const {reviewData: [reviewData, setReviewData]} = useOutletContext();
  const navigate = useNavigate();
  async function deleteThisPhoto (event) {
    event.preventDefault();
    try {
      const response = await fetch (`
      https://autoplex-webservice.onrender.com/api/reviews/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })

      const deleteData = await response.json();
      console.log('This is the deleted review data', deleteThisPhoto);
      const otherResponse = await fetch ('https://autoplex-webservice.onrender.com/api/reviews`');

      setReviewData(otherData);
      navigate('../reviews')
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <button>Delete</button>
    </div>
  )
};

export default DeleteReview;