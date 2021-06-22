import React, { useState } from 'react';
import './index.scss';
export const SearchBar = ({ handleFormSubmit }) => {
  const [textFromSearchBar, setTextFromSearchBar] = useState('');

  const handleOnChange = (evt) => {
    setTextFromSearchBar(evt.target.value);
    console.log(textFromSearchBar);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFormSubmit(textFromSearchBar);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container-form">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="Search videos"
        />
        <i
          type="button"
          onClick={handleSubmit}
          className="material-icons style-icon"
        >
          search
        </i>
      </div>
    </form>
  );
};
