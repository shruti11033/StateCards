import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';


function Sort(props) {
    const [dir, setDir] = useState(1);
    const handleClick = () => {
      if (dir === 1) {
        setDir(-1);
        props.sortHandler(-1);
      } else {
        setDir(1);
        props.sortHandler(1);
      }
    };
    //return <button title="Sort by Name" onClick={{handleClick}}/>;
    return <IconButton onClick={() => handleClick()}><SortIcon/></IconButton>;
}

export default Sort;
