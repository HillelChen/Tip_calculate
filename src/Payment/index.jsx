import React from 'react'

export default function Payment({ MealCost, tip }) {
    return (
        <div>
            {MealCost > 0 && <h3>{`You need  to pay ${MealCost + tip} $ (${MealCost} $ for the food ang give a tip of ${tip} $)`}</h3>}
            {/* {({MealCost} = 0)? <h3>you need to tell me how much the meal cost </h3> : <h3>{`You need to pay ${MealCost}`}</h3>  } */}

        </div>
    )
}

