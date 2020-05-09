import React, { Fragment } from 'react';
import '../css/SelectedValue.css'

const SelectedValue = ({currentDataset, isSelecting, setIsSelecting}) => {

  const optionsSelected = currentDataset.content.map(option => {

    if(option.isChecked){
      return (
        <Fragment key={option.id}>
          {option.value + ' '}
        </Fragment>
      )
    }
    return undefined
  })

  const isNoOptionSelected = optionsSelected.every(option => option === undefined)

  if(currentDataset === undefined) 

  return <div className="no-values" onClick={() => setIsSelecting(!isSelecting)}>SELECT AN OPTION</div>

  return (
    <section className="selected-values">

      { isNoOptionSelected
        ?
      <div className="no-values" onClick={() => setIsSelecting(!isSelecting)}>{currentDataset.name}</div>
        : 
      <div className="values" onClick={() => setIsSelecting(!isSelecting)}>{optionsSelected}</div> 
      }
      
      { isNoOptionSelected 
        ? 
      '' 
        : 
      <div className="subtitle">{currentDataset.subtitle}</div>}

    </section>
  )
}

export default SelectedValue;
