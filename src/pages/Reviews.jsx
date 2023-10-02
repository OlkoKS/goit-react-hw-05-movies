import { Loader } from 'components/Loader/Loader';
import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useFetchReview } from 'hooks';
import styled from 'styled-components';

const StyledText = styled.p`
  margin-left: 60px;
  font-size: 20px;
`;

const Reviews = () => {
  const { reviews, loading, error } = useFetchReview();
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {reviews.length > 0 ? (
        <ReviewsInfo reviews={reviews} />
      ) : (
        <StyledText>We don't have any reviews for this movie.</StyledText>
      )}
    </>
  );
};

export default Reviews;
