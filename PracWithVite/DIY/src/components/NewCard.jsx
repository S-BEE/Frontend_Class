import './newcard.css'
import food from '../assets/food.jpg'

let props = {
    food: "../assets/food.jpg"
}

function NewCard({food,price,name}){
    return(
        <div className="card">
            <div className="container">
            <div>
                <img src={food} alt="food" width={250}/>;
            </div>
            <span>{price}</span>
            <h4>{name}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Illum praesentium fugiat explicabo itaque dolccusamus ad ex.</p>
            <button className='btn'>ADD TO CART</button>

            </div>
            
        </div>
    )
}

export default NewCard