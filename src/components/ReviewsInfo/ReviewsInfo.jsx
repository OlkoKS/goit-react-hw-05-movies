import {
  StyledList,
  StyledListItem,
  StyledText,
  StyledTitle,
} from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <StyledList>
      {reviews.map(({ id, content, author }) => (
        <StyledListItem key={id}>
          <StyledTitle>Author: {author}</StyledTitle>
          <StyledText>{content}</StyledText>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
