import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  margin: 64px auto;
  justify-content: center;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  & > * {
    width: 400px;
  }
`;

const StyledText = styled.p`
  margin: 12px;
  font-size: 24px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 600px;
`;
const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export { StyledList, StyledText, ImageContainer, StyledImage };
