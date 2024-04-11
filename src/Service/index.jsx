import React from 'react'
import { useState } from 'react';
import styles from "./style.module.css"


export default function Service({MealCost ,setMealCost , tip ,setTip , children}) {

  function handleOption(value) {
    setMealCost((value+1)* MealCost )
  }

    // const [selectedOption, setSelectedOption] = useState('Dissatisfied (0%)');

    // const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    return (
        <div> 
          {children} 
          {/* <label htmlFor="options" className={styles.label}></label> */}
          {/* <select> */}
          <select value={tip} onChange={e=>setTip(Number(e.target.value))}>
            <option value="0" >Dissatisfied (0%)</option>
            <option value="5" >It was OK (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">It was amazing! (20%)</option>

            {/* <option value="option1" onClick={handleOption(value)}>Dissatisfied (0%)</option>
            <option value="option2"  onClick={handleOption(value)}>It was OK (5%)</option> */}
          </select>
      </div>
      
    )
}
