import React from 'react';


const SearchBox = ({onSearchChange}) => {
    return(
        <div>
            <input className=" tc pa2 ma1 ba b--green bg-lightest-blue" type="Search" placeholder="Search"
            onChange ={onSearchChange}
             />

        </div>
    )
}


export default SearchBox;