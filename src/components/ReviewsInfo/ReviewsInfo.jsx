import { StyledListItem, StyledText, StyledTitle } from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <StyledListItem key={id}>
          <StyledTitle>Author: {author}</StyledTitle>
          <StyledText>{content}</StyledText>
        </StyledListItem>
      ))}
    </ul>
  );
};
