import React, { useState } from 'react';
import Selector from './components/Selector';
import SelectedValue from './components/SelectedValue';

const App = () => {

  const [isSelecting, setIsSelecting] = useState(false)

  const [selection, setSelection] = useState("Mechanism")

  return (
    <>
      <SelectedValue selection={selection} isSelecting={isSelecting} setIsSelecting={setIsSelecting}/>
      {isSelecting && <Selector selection= {selection} setSelection={setSelection}/>} 
    </>
  )
}

export default App;
