import notFoundImage from '../../image/not_found_image.jpg';
import { Link, useLocation } from 'react-router-dom';
import {
  ImageContainer,
  StyledImage,
  StyledList,
  StyledText,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(({ id, poster_path, name, title }) => (
        <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
          <li>
            <ImageContainer>
              <StyledImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                    : notFoundImage
                }
                alt={title || name}
              />
            </ImageContainer>
            <StyledText>{title || name}</StyledText>
          </li>
        </Link>
      ))}
    </StyledList>
  );
};
