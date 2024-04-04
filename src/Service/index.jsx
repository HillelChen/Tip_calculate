import React from 'react'
import { useState } from 'react';
import styles from "./style.module.css"


export default function Service() {

    const [selectedOption, setSelectedOption] = useState('Dissatisfied (0%)');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
        <p>How did you like the service?  
          <label htmlFor="options" className={styles.label}></label>
          <select id="options" value={selectedOption} onChange={handleOptionChange}>
            <option value="option1">Dissatisfied (0%)</option>
            <option value="option2">It was OK (5%)</option>
            <option value="option3">It was good (10%)</option>
            <option value="option4">It was amazing! (20%)</option>
          </select>
        </p>
      </div>
      
    )
}
