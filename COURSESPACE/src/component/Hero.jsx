import Button from "./Button.jsx"
import heroine from '../assets/images/home-hero.jpg'
import './hero.css'
import Number from "./Number"
const Hero = ()=>{
    return(
        <section>
            <div className="container">
                <div className="txt">
                    <h1>Improve your Skill with Different Way</h1>
                    <p>Let's take an online course to improve your skills in a different way, 
                        you can set your own study time according to your learning speed. 
                        So you san study comfortable and absorb the material easily.
                    </p>
                    <div className="cta">
                        <Button text='Get Started' txtcol='#fff' bg='#127c27' />
                        <Button text='Watch Video'/>
                    </div>
                </div>
                <div className="pics">
                    <img className="heroine" src={heroine} alt="student" />
                </div>
            </div>
            <div className="numbers">
                <Number text1='10k+' text2='Students' />
                <Number text1='20k+' text2='Quality Course' />
                <Number text1='10k+' text2='Experience Mentors' />
            </div>
        </section>
    )
}


export default Hero