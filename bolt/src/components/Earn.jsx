import driver from '../assets/driver.webp'
import courier from '../assets/courier.webp'
import restaurant from '../assets/restaurant.webp'
import fleet from '../assets/fleet.webp'
const Earn = ()=>{

    return(
        <div>
            <div className="flex flex-col items-center w-[90%]">
                <div className=" ">
                    <h2 className='font-bold text-[3rem] ' >Earn Money with Bolt</h2>
                </div>
                <div className="flex gap-5 justify-center">
                        <button className='rounded-full border border-3 border-[#d7dadf] p-2 active:bg-[#2f313f]  '>Driver</button>
                        <button className='rounded-full border border-3 border-[#d7dadf] p-2 active:bg-[#2f313f]  ' >Courier</button>
                        <button className='rounded-full border border-3 border-[#d7dadf] p-2 active:bg-[#2f313f]  ' >Restaurant or store owner</button>
                        <button className='rounded-full border border-3 border-[#d7dadf] p-2 active:bg-[#2f313f]  ' >Fleet Owner</button>
                </div>
                <div className="">
                    <div className='flex gap-[5%] '>
                            <div className=" ">
                                    <img src={driver} alt="" className="rounded-[1rem] h-[80%] "/>
                            </div>
                            <div className="">
                                <h2>Drive and earn extra money</h2>
                                <ol>
                                    <li>
                                        <h5>Drive more, earn more</h5>
                                        <p>
                                        Our 100+ million riders will send you plenty of ride requests. 
                                        When demand is high, you can earn even more.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Set your schedule</h5>
                                        <p>
                                        Drive for as long and as often as you like. Weekdays;
                                        weekends; evenings — fit driving around your lifestyle.
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Get paid each week</h5>
                                        <p>
                                        You’ll receive your earnings at the end of each week 
                                        — no need to wait around for payday.
                                        </p>
                                    </li>
                                </ol>
                                <button>Learn More</button>
                            </div>
                    </div>
                    <div className='flex gap-[5%] '>
                        <div className=" ">
                                <img src={courier} alt="" className="rounded-[1rem] h-[80%] "/>
                        </div>
                        <div className="">
                            <h2>Make money delivering food</h2>
                            <ol>
                                <li>
                                    <h5>Earn extra income, fast</h5>
                                    <p>
                                    There’s no subscription fee. You’ll receive your earnings at the end of each week.
                                    </p>
                                </li>
                                <li>
                                    <h5>Make money whenever you like</h5>
                                    <p>You decide when and how often you deliver — weekdays, evenings, weekends, 
                                        or just the occasional hour — it’s up to you.</p>
                                </li>
                                <li>
                                    <h5>Deliver your way</h5>
                                    <p>Bike, scooter or car — you choose how to make deliveries.</p>
                                </li>
                            </ol>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='flex gap-[5%] '>
                        <div className=" ">
                                <img src={restaurant} alt="" className="rounded-[1rem] h-[80%] "/>
                        </div>
                        <div className="">
                            <h2>Increase your sales</h2>
                            <ol>
                                <li>
                                    <h5>Reach new customers</h5>
                                    <p>Millions of our users are ordering food or goods from restaurants and stores just like yours.</p>
                                </li>
                                <li>
                                    <h5>Increase your earnings</h5>
                                    <p>Our large network of users brings more customers and business to you.</p>
                                </li>
                                <li>
                                    <h5>Let us handle delivery</h5>
                                    <p>We’ll take care of the logistics, while you focus on running your business.</p>
                                </li>
                            </ol>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='flex gap-[5%] '>
                        <div className=" ">
                                <img src={fleet} alt="" className="rounded-[1rem] h-[80%] "/>
                        </div>
                        <div className="">
                            <h2>Grow your transport business</h2>
                            <ol>
                                <li>
                                    <h5>Boost your earnings</h5>
                                    <p>Our large rider community means more orders per day and higher earnings.</p>
                                </li>
                                <li>
                                    <h5>Manage your assets</h5>
                                    <p>Easily view your vehicles, drivers and their current status.</p>
                                </li>
                                <li>
                                    <h5>Keep track of performance</h5>
                                    <p>Get easy access to each driver’s completed trips, invoices, and payout information.</p>
                                </li>
                            </ol>
                            <button>Learn More</button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

    )
}
export default Earn