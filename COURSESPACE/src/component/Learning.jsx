import "./learning.css"
import ladyPic from "../assets/images/home-feature.png"


const Learning = ()=>{
    return(
            <section>
                <div className="container">
                    <div className="lorem">
                        <p>UI/UX Design</p>
                        progress vc 
                        <p>Mobile Development</p>
                        <p>Web Development</p>
                    
                    </div>
                    <div className="ipsum"></div>
                    <div className="pic">
                        <img className="ladyPic" src={ladyPic} alt="student" />
                    </div>
                    <div className="text">
                        <h2>Make your Learning Enjoyable</h2>
                        <p>Set the way of learning according to your wishes with some of the benefits 
                            that you get us, so you on enjoy the lessons that we provide.
                        </p>
                        <div className="cardComponent">
                            <div className="sm-card">
                                <h3>Easy Accessable</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                            <div className="sm-card">
                                <h3>Easy Accessable</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p></div>
                        
                            <div className="sm-card">
                                <h3>Easy Accessable</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p></div>
                            <div className="sm-card">
                                <h3>Easy Accessable</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                    </div>
               
                </div>
            </section>
        )

}

export default Learning