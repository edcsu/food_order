import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp'

const requestConfig = {}

function Meals() {
    const {data, isLoading, error} = useHttp(`${BASE_URL}/meals`, requestConfig, [])

    return (
        <ul id='meals'>
            {data.map((meal) => (
                <MealItem meal={meal}  key={meal.id}/>
            ))}
        </ul>
    )
}

export default Meals