import notFoundImage from '../../image/not_found_image.jpg';
import { StyledListItem, StyledText, StyledTitle } from './CastInfo.styled';

export const CastInfo = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, original_name, profile_path, name, character }) => (
        <StyledListItem key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w400/${profile_path}`
                : notFoundImage
            }
            alt={name || original_name}
          />
          <StyledTitle>
            Name: <StyledText>{name || original_name}</StyledText>
          </StyledTitle>
          <StyledTitle>
            Character: <StyledText>{character}</StyledText>
          </StyledTitle>
        </StyledListItem>
      ))}
    </ul>
  );
};
