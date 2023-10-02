import { Loader } from 'components/Loader/Loader';
import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useFetchReview } from 'hooks';

const Reviews = () => {
  const { reviews, loading, error } = useFetchReview();
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {reviews.length > 0 ? (
        <ReviewsInfo reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
