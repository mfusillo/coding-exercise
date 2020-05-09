import React, { Fragment } from 'react';
import '../css/SelectedValue.css'

const SelectedValue = ({currentDataset, isSelecting, setIsSelecting}) => {

  const optionsSelected = currentDataset.content.map(option => {

    if(option.isChecked){
      return (
        <Fragment key={option.id}>
          {option.value + ', '}
        </Fragment>
      )
    }
  })

  return (
    <section className="selected-values">

      {optionsSelected.every(option => option === undefined) ? 
      <div className="no-values" onClick={() => setIsSelecting(!isSelecting)}>{currentDataset.name}</div>  :
      <div className="values" onClick={() => setIsSelecting(!isSelecting)}>{optionsSelected}</div>}
      
      {optionsSelected.every(option => option === undefined) ? '' : <div className="subtitle">{currentDataset.subtitle}</div>}

    </section>
  )
}

export default SelectedValue;
