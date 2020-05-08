import React, { Fragment } from 'react';
import '../css/SelectedValue.css'

const SelectedValue = ({options, isSelecting, setIsSelecting}) => {

  const optionsSelected = options.map(option => {
    if(option.isChecked){
      return (
        <Fragment key={option.id}>
          {option.value + ' '}
        </Fragment>
      )
    }
  })

  return (
    <>
      <p onClick={() => setIsSelecting(!isSelecting)}>
        {optionsSelected}
      </p>
    </>
  )
}

export default SelectedValue;
