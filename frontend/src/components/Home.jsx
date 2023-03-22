import hotel from './images/hotel.jpeg'
import hotel1 from './images/hotel1.jpeg'
import hotel2 from './images/hotel2.jpeg'
import './Home.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot, faSearch, faWifi, faDumbbell, faDog, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className="home">
            
            <h1 className='motto'>Begin your next journey with us.</h1>

            <div className='search-bar'>
                <div className='border-container'>
                    <form className='input-form'>
                        <input type="text" placeholder='Begin searching' className='search-text'/>
                        <button className='search-icon' onClick={SubmitEvent}><FontAwesomeIcon icon = {faSearch} /></button>
                    </form>
                </div>
            </div>

            <div className='deal-containers'>
                <Link to ="./login" className='hotel-example'>
                    <img src= {hotel} className = "hotelimg" alt='hotel'/>
                    <div className='lower-box'>
                        <div className='loc-bar'>
                            <FontAwesomeIcon icon = {faLocationDot} className="pinicon" />
                            <p className='location'> San Juan</p>
                            <p className='hotel-name'>Wyndham Resort</p>
                        </div>
                        <div className='amenities-row'>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faWifi} className="amenicon" />
                                <p className='icon-text'>Wi-fi</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faDumbbell} className="amenicon" />
                                <p className='icon-text'>Gym</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faDog} className="amenicon" />
                                <p className='icon-text'>Pet Friendly</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faCoffee} className="amenicon" />
                                <p className='icon-text'>Continental Breakfast</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to ="./login" className='hotel-example'>
                    <img src= {hotel1} className = "hotelimg" alt='hotel'/>
                    <div className='lower-box'>
                        <div className='loc-bar'>
                            <FontAwesomeIcon icon = {faLocationDot} className="pinicon" />
                            <p className='location'>Shanghai</p>
                            <p className='hotel-name'>Shangri-La Resort</p>
                        </div>
                        <div className='amenities-row'>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faWifi} className="amenicon" />
                                <p className='icon-text'>Wi-fi</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faDumbbell} className="amenicon" />
                                <p className='icon-text'>Gym</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faDog} className="amenicon" />
                                <p className='icon-text'>Pet Friendly</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faCoffee} className="amenicon" />
                                <p className='icon-text'>Continental Breakfast</p>
                            </div>
                        </div>
                        
                    </div>
                </Link>

                <Link to ="./login" className='hotel-example'>
                    <img src= {hotel2} className = "hotelimg" alt='hotel'/>
                    <div className='lower-box'>
                        <div className='loc-bar'>
                            <FontAwesomeIcon icon = {faLocationDot} className="pinicon" />
                            <p className='location'>Paris</p>
                            <p className='hotel-name'>Monsieur Helder</p>
                        </div>
                        <div className='amenities-row'>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faWifi} className="amenicon" />
                                <p className='icon-text'>Wi-fi</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faDumbbell} className="amenicon" />
                                <p className='icon-text'>Gym</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faDog} className="amenicon" />
                                <p className='icon-text'>Pet Friendly</p>
                            </div>
                            <div className='icon'>
                                <FontAwesomeIcon icon = {faCoffee} className="amenicon" />
                                <p className='icon-text'>Continental Breakfast</p>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>


    );
}

export default Home;