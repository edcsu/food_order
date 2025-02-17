import React from 'react'

function MealItem({ meal}) {
  return (
    <li className='meal-item'>
        <article>
            <img src={meal.image} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className='meatl-item-price'>{meal.price}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='mea-item-actions'>
                <button>Add to Cart</button>
            </p>
        </article>
    </li>
  )
}

export default MealItem