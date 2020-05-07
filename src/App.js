import React, { useState } from 'react';
import Selector from './components/Selector';
import SelectedValue from './components/SelectedValue';

const App = () => {

  const [isSelecting, setIsSelecting] = useState(false)

  return (
    <>
      <SelectedValue isSelecting={isSelecting} setIsSelecting={setIsSelecting}/>
      {isSelecting && <Selector />} 
    </>
  )
}

export default App;
