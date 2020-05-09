import React, { Fragment } from 'react';
import '../css/Selector.css'

const Selector = ({currentDataset, setCurrentDataset, selection, setSelection}) => {

  const handleSelection = (event) => {

    setSelection(selection + ' , ' + event.target.value)

    currentDataset.content.forEach(option => {
      if(option.value === event.target.value){
        option.isChecked = event.target.checked
      }
    })

    setCurrentDataset(currentDataset)
  }

  const optionsToSelect = currentDataset.content.map(({id, value, isChecked}) => {
    return (
      <Fragment key={id}>
        <input type="checkbox" id={value} value={value} checked={isChecked} onChange={handleSelection}/>
        <label htmlFor={value}>{value}</label>
      </Fragment>
    )
  })

  return (
    <form>
      {optionsToSelect}
    </form>
  )
}

export default Selector;
