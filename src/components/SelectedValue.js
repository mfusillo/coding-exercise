import React, { Fragment } from 'react';
import '../css/SelectedValue.css'

const SelectedValue = ({currentDataset, isSelecting, setIsSelecting}) => {

  const optionsSelected = currentDataset.options.map(option => {
    if(option.isChecked){
      return (
        <Fragment key={option.id}>
          {option.value + ' '}
        </Fragment>
      )}
  })

  const isNoOptionSelected = optionsSelected.every(option => option === undefined)

  return (
    <section className="selected-values" onClick={() => setIsSelecting(!isSelecting)}>

      { isNoOptionSelected
        ?
      <div className="no-values" >{currentDataset.name}</div>
        : 
      <div className="values" >{optionsSelected}</div> 
      }
      
      { isNoOptionSelected 
        ? 
      '' 
        : 
      <div className="subtitle">{currentDataset.subtitle}</div>
      }

    </section>
  )
}

export default SelectedValue;
