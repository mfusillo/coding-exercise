import React, { Fragment } from 'react';

const Selector = ({options, setOptions, selection, setSelection}) => {

  const handleSelection = (event) => {

    let optionsChecked = options

    setSelection(selection + ' , ' + event.target.value)

    optionsChecked.forEach(option => {
      if(option.value === event.target.value){
        option.isChecked = event.target.checked
      }
    })

    setOptions(optionsChecked)
  }

  const optionsToSelect = options.map(({id, value, isChecked}) => {
    return (
      <Fragment key={id}>
        <input type="checkbox" id={value} value={value} checked={isChecked} onChange={handleSelection}/>
        <label htmlFor={value}>{value}</label><br/>
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
