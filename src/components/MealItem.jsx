import { BASE_URL, currencyFormatter} from '../utils/constants'
import Button from './UI/Button'

function MealItem({ meal}) {
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
                <Button>Add to Cart</Button>
            </p>
        </article>
    </li>
  )
}

export default MealItem