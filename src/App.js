import React, { useState } from 'react';
import Selector from './components/Selector';
import SelectedValue from './components/SelectedValue';
import './css/App.css'

const App = () => {

  const [options, setOptions] = useState([
    {id: 1, value: "ABRASION", isChecked: false},
    {id: 3, value: "BURN", isChecked: false},
    {id: 4, value: "FROST", isChecked: false},
    {id: 5, value: "GUN SHOT", isChecked: false},
    {id: 6, value: "LACERATION", isChecked: false},
    {id: 7, value: "RTC", isChecked: false},
    {id: 8, value: "STAB", isChecked: false}
  ])

  const [isSelecting, setIsSelecting] = useState(false)

  const [selection, setSelection] = useState("")

  return (
    <section>
      <SelectedValue options={options} isSelecting={isSelecting} setIsSelecting={setIsSelecting}/>
      {isSelecting && <Selector selection={selection} setSelection={setSelection} options={options} setOptions={setOptions} />} 
    </section>
  )
}

export default App;
