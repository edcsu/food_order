import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
function Meals() {
    const [foundMeals, setFoundMeals] = useState([])
    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch(`${BASE_URL}/meals`)
                if (!response.ok) {
                    //
                }    
                const meals = await response.json()
                setFoundMeals(meals)        
            } catch (error) {
                
            }
        }
    
        fetchMeals()
    }, [])

    return (
    <ul id='meals'>
        {foundMeals.map((meal) => <li key={meal.id}>
            {meal.name}
        </li>)}
    </ul>
    )
}

export default Meals