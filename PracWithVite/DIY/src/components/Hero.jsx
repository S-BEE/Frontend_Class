import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";


function Hero(){
    return(
        <section className="hero">
            <div className="hero-component" style={{display:"flex",justifyContent:"space-between"}}>
                <HeroLeft/>
                <HeroRight />

            </div>
        </section>
    )
}

export default Hero