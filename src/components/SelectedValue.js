import React from 'react';

const SelectedValue = ({isSelecting, setIsSelecting}) => {

  return (
      <p onClick={() => setIsSelecting(!isSelecting)}>SelectedValue</p>
  )
}

export default SelectedValue;
