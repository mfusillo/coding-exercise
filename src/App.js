import React, { useState } from 'react';
import Selector from './components/Selector';
import SelectedValue from './components/SelectedValue';

const App = () => {

  const [options, setOptions] = useState([
    // {id: 0, value: "MECHANISM", isChecked: true},
    {id: 1, value: "ABRASION", isChecked: false, subtitle: "MECHANISM OF INJURY"},
    {id: 2, value: "BLUNT", isChecked: false, subtitle: "MECHANISM OF INJURY"},
    {id: 3, value: "BURN", isChecked: false, subtitle: "MECHANISM OF INJURY"},
    {id: 4, value: "FROST", isChecked: false, subtitle: "MECHANISM OF INJURY"},
    {id: 5, value: "GUN SHOT", isChecked: false,subtitle: "MECHANISM OF INJURY"},
    {id: 6, value: "LACERATION", isChecked: false, subtitle: "MECHANISM OF INJURY"},
    {id: 7, value: "RTC", isChecked: false, subtitle: "MECHANISM OF INJURY"},
    {id: 8, value: "STAB", isChecked: false, subtitle: "MECHANISM OF INJURY"}
  ])

  const [isSelecting, setIsSelecting] = useState(false)

  const [selection, setSelection] = useState("")

  return (
    <>
      <SelectedValue options={options} isSelecting={isSelecting} setIsSelecting={setIsSelecting}/>
      {isSelecting && <Selector selection={selection} setSelection={setSelection} options={options} setOptions={setOptions} />} 
    </>
  )
}

export default App;
