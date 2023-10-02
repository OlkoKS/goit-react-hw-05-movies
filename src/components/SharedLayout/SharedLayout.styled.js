import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
  width: 100%;
  padding: 32px 60px;
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: rgb(24, 173, 143);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 32px;
  color: cornsilk;

  &.active {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;

export { Navigation, StyledLink };
