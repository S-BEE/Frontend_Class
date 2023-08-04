
import './card.css'
import {AiFillStar} from 'react-icons/ai'
import {FiArrowRight} from 'react-icons/fi'


const Card=({pics,subject,price})=>{
    return(

        <div className="card-container">
            <div className="img-box">
                <img className="card-img" src={pics} alt="" />
            </div>
            
            <div className="card-text">
                <h3>{subject}</h3>
                <div className="star">
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                </div>
                <div>
                <p><span>{price}</span>/course  </p>
                <a href="#"><FiArrowRight/></a> 
                </div>
                
            </div>
        </div>

    )
}



export default Card