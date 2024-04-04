import React from 'react'
import Cost from './Cost'
import './App.css'
import Service from './Service'
import ServiceFreind from './ServiceFreind'
import Payment from './Payment'
import Reset from './Reset'
import { useState } from 'react'


export default function App() {

  const [MealCost, setMealCost] = useState(0)


  return (
    <div>
      <Cost MealCost={MealCost} setMealCost={setMealCost} />
      <Service />
      <ServiceFreind />
      <br />
      <Payment MealCost={MealCost} />
      <Reset MealCost={MealCost} setMealCost={setMealCost} />
      <p>{MealCost}</p>

    </div>
  )
}
