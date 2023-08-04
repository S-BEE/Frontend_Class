import { useEffect, useState } from "react"
import "./blog.css"
const Blog = ()=>{

        const [data, setData] = useState([])
        useEffect(function () {
            function gallery(){
                fetch('https://jsonplaceholder.typicode.com/albums/1/photos/')
                .then((response)=>response.json())
                .then((bshuk)=>setData(bshuk.slice()));
            };
           gallery();
           } ,[])

    return(
        <div>
            <h1>BLOG: Meet our Unsung Heros</h1>
            <div className="grid-box">
            {data && data.map((item)=>{
                return <>
               
                    <div className="grid-item" key={item.id}>
                        <img src={item.url} alt="" />
                        <p>{item.title}</p>
                    </div>
                
                </>
            })}
            </div>
        </div>
    )
}
export default Blog