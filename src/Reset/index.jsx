import React from 'react'


export default function Reset({ setMealCost }) {

    function handleReset() {
        setMealCost("")
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
