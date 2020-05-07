import React from 'react';

const Selector = () => {

  return (
      <form>
        <input type="checkbox" id="abrasion" value="abrasion" />
        <label htmlFor="abrasion">ABRASION</label><br/>
        <input type="checkbox" id="blunt" value="blunt" />
        <label htmlFor="blunt">BLUNT</label><br/>
      </form>
  )
}

export default Selector;
