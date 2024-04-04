import React from 'react'

export default function Cost({ MealCost, setMealCost }) {

  function Mealco(e) {
    const inputValue = e.target.value;
    const numericValue = parseFloat(inputValue); // Convert input value to a number
    setMealCost(numericValue);
  }

  return (
    <div>
      <p>How much was the bill? <input type="text" onChange={Mealco} /></p>
    </div>
  )
}
