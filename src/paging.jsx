import React, { Component } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paging(props) {

  const pageCount = Math.ceil(props.count / props.limit);
  const handleChange = (event, value) => {
    props.offsetHandler( (value-1) * props.limit );
  };

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} onChange={handleChange} variant="outlined" shape="rounded" style={{ display: 'flex', justifyContent: 'center' }}/>
    </Stack>
  );
}
