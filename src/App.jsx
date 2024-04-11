import React from 'react'
import Cost from './Cost'
import './App.css'
import Service from './Service'
import ServiceFreind from './ServiceFreind'
import Payment from './Payment'
import Reset from './Reset'
import { useState } from 'react'


export default function App() {

  const [MealCost, setMealCost] = useState("")
  // const [MealCost, setMealCost] = useState(0)
  const [tip1, setTip1] = useState(0)
  const [tip2, setTip2] = useState(0)

  const tip = MealCost * ((tip1 + tip2) / 2 / 100);

  return (
    <div>

      <Cost MealCost={MealCost} setMealCost={setMealCost} />
      <Service tip={tip1} setTip={setTip1} MealCost={MealCost} setMealCost={setMealCost} >How did you like the service? </ Service >
      <Service tip={tip2} setTip={setTip2} MealCost={MealCost} setMealCost={setMealCost} > How did your friend like the service? </ Service >
      <br />


      <Payment MealCost={MealCost} tip={tip} />
      <Reset setMealCost={setMealCost} />

    </div>
  )
}
