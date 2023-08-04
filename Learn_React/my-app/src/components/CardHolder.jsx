import Card from "./Card";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const CardHolder = ()=>{
    return(
        <div className="parent">
            <Card icon = {FaTwitter} sm = 'Twitter' />
            <Card icon = {FaInstagramSquare} sm = 'Instagram'/>
            <Card icon = {FaYoutube} sm = 'Youtube'/>
        </div>
    )
}
export default CardHolder