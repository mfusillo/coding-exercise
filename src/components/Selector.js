import React from 'react';

const Selector = ({selection, setSelection}) => {

  const handleSelection = (event) => {
    setSelection(selection + ' , ' + event.target.value)
  }

  return (
      <form>
        <input type="checkbox" id="abrasion" value="abrasion" onChange={handleSelection}/>
        <label htmlFor="abrasion">ABRASION</label><br/>
        <input type="checkbox" id="blunt" value="blunt" onChange={handleSelection}/>
        <label htmlFor="blunt">BLUNT</label><br/>
      </form>
  )
}

export default Selector;
