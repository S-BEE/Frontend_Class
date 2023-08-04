import './course.css'
import Card from './Card'
import img1 from '../assets/images/courses/annie-spratt-QckxruozjRg-unsplash.jpg'
import img2 from '../assets/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg'
import img3 from '../assets/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg'

const Courses=()=>{
    return(
        <section className='course-section'>
            <div className="title">
                <h2>Most Popular Courses</h2>
            </div>
            <div className="course">
                <Card subject='Android Development from Zero to Hero' price='$35' pics={img1} />
                <Card subject='UI/UI Complete Guide' price='$30' pics={img2}/>
                <Card subject='Modern React with MOU and Redux' price='$35' pics={img3}/>
            </div>

        </section>
    )
}

export default Courses