import React, { Fragment } from 'react';

const SelectedValue = ({options, isSelecting, setIsSelecting}) => {

  const optionsChecked = options.map(option => {
    if(option.isChecked){
      return (
        <Fragment key={option.id}>
          <p onClick={() => setIsSelecting(!isSelecting)}>{option.value}</p>
        </Fragment>
      )
    }
  })

  return (
    <>
      {optionsChecked}
    </>
  )
}

export default SelectedValue;
