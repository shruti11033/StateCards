import React from 'react';

function Search(props) {
    const handleChange = e => {
      props.searchHandler(e.target.value);
    };

    return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <input className="searchBar" type="search" placeholder="Search State.." onChange={handleChange}/>
            </div>
    );
}

export default Search;
