import React, { useState } from 'react'

export const SearchBar = ({handleFormSubmit}) => {
    const [textFromSearchBar, setTextFromSearchBar] = useState('')

    const handleOnChange = evt => {
        setTextFromSearchBar(evt.target.value)
        console.log(textFromSearchBar)
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        handleFormSubmit(textFromSearchBar);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div >
                <i type='submit' className='material-icons'>search</i>
                <input type='text' onChange={handleOnChange} placeholder='Search videos' />
            </div>
        </form>
    )
}