const Products = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate('new')}
            className="btn" style={{color:txtcol,background:bg}}>Click me</button>
            <button onClick={()=>navigate('old')}
            className="btn" style={{color:txtcol,background:bg}}>Say Hello</button>
        </div>
    )
}
export default Products