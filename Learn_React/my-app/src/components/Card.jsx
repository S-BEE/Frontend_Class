import './card.css'


const Card = ({icon,sm})=>{
    return(
        <>
        
        <div className="child">
            <a href="https://www.twitter.com/">{icon}</a>
            <h1>{sm}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quasi? 
                Sapiente ab cum exercitationem libero iure excepturi in quis minus, enim, 
                officia repellendus provident quo dolores, 
            </p>
            <button>READ MORE
            </button>
        </div>
        
        </>
    )
}

export default Card