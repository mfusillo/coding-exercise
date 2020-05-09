import React, { Fragment } from 'react';
import '../css/SelectedValue.css'

const SelectedValue = ({currentDataset, options, isSelecting, setIsSelecting}) => {

  const optionsSelected = currentDataset.content.map(option => {

    if(option.isChecked){
      return (
        <Fragment key={option.id}>
          {option.value + ' '}
        </Fragment>
      )
    }
  })

  return (
    <section className="selected-values">
      <div className="values" onClick={() => setIsSelecting(!isSelecting)}>
        {optionsSelected}
      </div>
      {optionsSelected.every(option => option === undefined) ? '' : <div className="subtitle">Mechanism of Injury</div>}
    </section>
  )
}

export default SelectedValue;
