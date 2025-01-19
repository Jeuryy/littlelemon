import  './Box.css'
import { RiEBike2Fill } from "react-icons/ri";


const Box = (props) => {
    return (
        <div className="box">
            <img src={props.src} alt={props.lt} className="box-img"/>
            <div className='name-price'>
                <p className="box-name">{props.name}</p>
                <p className="box-price">{props.price}</p>
            </div>
            <p className="box-description">{props.description}</p>
            <a className="box-button" href='/Order'>Order a delivery <RiEBike2Fill /></a>
        </div>
    )

}

export default Box;