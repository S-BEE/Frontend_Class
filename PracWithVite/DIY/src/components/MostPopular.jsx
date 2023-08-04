import NewCard from "./NewCard"
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpg"


function MostPopular(){
    return(
        <section>
            <h2>Most Popular Item</h2>
            <div className="card-holder" style={{display:'flex',gap:'1.5rem',justifyContent:"center",}}>
                <NewCard food ={food1} price = '$30'  name= 'Vegetable Salad'/>
                <NewCard food = {food2} price = '$50'  name='Jollof Rice'/>
                <NewCard food = {food3} price = '$75' name='Pepperoni Plantain'/>
            </div>
        </section>
    )
}

export default MostPopular