import React from 'react'
import data from '../../DataHub/Interns.json'
import { useState } from 'react'



function Certificate() {
    const [Name, setName] = useState(null)
    const handleChange = event => {
        setName(event.target.value);
      };
    
    return (
        <div>
            <p>Certificate Page</p>

            <label htmlFor="dropdown">Select an option:</label>
            <select id="dropdown" value={Name} onChange={handleChange}>
            <option value="-----">Select</option>
            {data.interns.map(interns => (
                    
                    <option key={interns.id} value={interns.name}>{interns.name}</option>
                    
                
      ))}
      </select>
      <p>{Name}</p>
        </div>
    )
}

export default Certificate
git config --global user.email "tejeshvenna@gmail.com"
  git config --global user.name "Alluri-tejesh"