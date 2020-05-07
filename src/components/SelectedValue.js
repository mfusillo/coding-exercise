import React from 'react';

const SelectedValue = ({selection, isSelecting, setIsSelecting}) => {

  return (
      <p onClick={() => setIsSelecting(!isSelecting)}>{selection}</p>
  )
}

export default SelectedValue;
