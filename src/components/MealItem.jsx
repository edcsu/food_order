import { useContext } from 'react'

import Button from './UI/Button'

import { BASE_URL, currencyFormatter} from '../utils/constants'
import CartContext from '../store/CartContext'

function MealItem({ meal}) {
    const { addItem } = useContext(CartContext)
    function handleAddToCart() {
        addItem(meal)
    }
    return (
        <li className='meal-item'>
            <article>
                <img src={`${BASE_URL}/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>
                        {currencyFormatter.format(meal.price)}
                    </p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className='mea-item-actions'>
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}

export default MealItem