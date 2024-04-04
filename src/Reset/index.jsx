import React from 'react'


export default function Reset({ MealCost, setMealCost }) {

    function handleReset() {
        setMealCost(0)
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
