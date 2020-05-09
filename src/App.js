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

  const [datasets, setDatasets] = useState([
    {
      name: "Mechanism",
      content: [
        {id: 1, value: "ABRASION", isChecked: false},
        {id: 3, value: "BURN", isChecked: false},
        {id: 4, value: "FROST", isChecked: false},
        {id: 5, value: "GUN SHOT", isChecked: false},
        {id: 6, value: "LACERATION", isChecked: false},
        {id: 7, value: "RTC", isChecked: false},
        {id: 8, value: "STAB", isChecked: false}
      ],
      subtitle: "Mechanism of Injury"
    },
    {
      name: "Mode of Transport",
      content: [
        {id: 1, value: "AMBULANCE", isChecked: false},
        {id: 3, value: "HELICOPTER", isChecked: false},
        {id: 4, value: "CAR", isChecked: false}
      ],
      subtitle: "Mode of Transport"
    }
  ])

  const [currentDataset, setCurrentDataset] = useState(datasets[0])

  const [isSelecting, setIsSelecting] = useState(false)

  const [selection, setSelection] = useState("")


  const datasetsToSelect = datasets.map((dataset, index) => {
    return (
      <option key={index} value={dataset.name} >{dataset.name}</option>
    )
  })
  
  const handleChange = (event) => {
    const datasetNameSelected = event.target.value

    datasets.forEach(dataset => {
      if(dataset.name === datasetNameSelected){
        setCurrentDataset(dataset)
      }
    })
  }

  return (
    <section>
      
      <select onChange={handleChange} style={{position: "absolute", left: 0}}>
        <option disabled selected>Select an Option</option>
        {datasetsToSelect}
      </select>


      <SelectedValue currentDataset={currentDataset} options={options} isSelecting={isSelecting} setIsSelecting={setIsSelecting}/>
      {isSelecting && <Selector currentDataset={currentDataset} setCurrentDataset={setCurrentDataset} selection={selection} setSelection={setSelection} options={options} setOptions={setOptions} />} 
    </section>
  )
}

export default App;
