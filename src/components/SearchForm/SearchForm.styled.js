import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

const SearchButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 0 10px;
  font-size: 32px;
  background-color: #7dcfbb;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 600px;
  height: 60px;
  padding: 0 24px;
  font-size: 28px;
  border: none;
  outline: none;
  border-radius: 4px;
`;

export { StyledForm, SearchButton, StyledInput };
