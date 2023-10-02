import { useState } from 'react';
import { SearchButton, StyledForm, StyledInput } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query === '') return alert('Please enter your request!');
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
        autoFocus={true}
      />
      <SearchButton type="submit">Search</SearchButton>
    </StyledForm>
  );
};
