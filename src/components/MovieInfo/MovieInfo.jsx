import notFoundImage from '../../image/not_found_image.jpg';
import {
  StyledContainer,
  StyledImage,
  StyledText,
  StyledTitle,
} from './MovieInfo.styled';

export const MovieInfo = ({
  movie: {
    original_title,
    title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  },
}) => {
  const allGenres = genres.map(({ name }) => name).join(', ');
  return (
    <StyledContainer>
      <StyledImage
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w400/${poster_path}`
            : notFoundImage
        }
        alt={title || original_title}
      />
      <div>
        <h1>{title || original_title}</h1>
        {release_date && (
          <StyledTitle>
            Release date: <StyledText>{release_date}</StyledText>
          </StyledTitle>
        )}
        <StyledTitle>
          User score:<StyledText>{vote_average}</StyledText>
        </StyledTitle>
        <StyledTitle>
          Overview: <StyledText>{overview}</StyledText>
        </StyledTitle>
        <StyledTitle>
          Genres: <StyledText>{allGenres}</StyledText>
        </StyledTitle>
      </div>
    </StyledContainer>
  );
};
