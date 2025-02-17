import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import MealItem from './MealItem'
import useHttp from '../hooks/useHttp'
import ErrorPage from './Error'

const requestConfig = {}

function Meals() {
    const {data, isLoading, error} = useHttp(`${BASE_URL}/meals`, requestConfig, [])

    if (isLoading) {
        return (
            <p className='center'>
                Fetching meals...
            </p>
        )
    }

    if (error) {
        return (
            <ErrorPage title="Failed to get meals" message={error} />
        )
    }

    return (
        <ul id='meals'>
            {data.map((meal) => (
                <MealItem meal={meal}  key={meal.id}/>
            ))}
        </ul>
    )
}

export default Meals