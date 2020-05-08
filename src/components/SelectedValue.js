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

  console.log(optionsSelected === false)

  return (
    <>
      <div onClick={() => setIsSelecting(!isSelecting)}>
        {optionsSelected}
      </div>
      {optionsSelected.every(option => option === undefined) ? '' : <div>MECHANISM OF INJURY</div>}
    </>
  )
}

export default SelectedValue;
