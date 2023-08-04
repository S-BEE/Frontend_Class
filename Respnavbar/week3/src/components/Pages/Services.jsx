import { useState, useEffect } from "react"

const Services = ()=>{
const [data, setData] = useState([])
useEffect(function () {
    function todo(){
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=>response.json())
        .then((bshuk)=>setData(bshuk));
    };
   todo();
   } ,[])
    return(
        <div>
            <h1>OUR SERVICES</h1>
            {data && data.map((item)=>{
                return <div key={item.id}> 
                <h3>{item.title}</h3>
                <p>{item.completed}</p>
                        </div>
            })}
        </div>
    )
}
export default Services