import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 20px 60px;
  display: flex;
  gap: 40px;
`;

const StyledImage = styled.img`
  width: 400px;
  height: 600px;
`;
const StyledTitle = styled.h2`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
`;

const StyledText = styled.p`
  font-weight: 400;
`;

export { StyledContainer, StyledImage, StyledTitle, StyledText };
