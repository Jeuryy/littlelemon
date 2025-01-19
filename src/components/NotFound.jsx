import Footer from './Footer';
import Header from './Header';
import { TfiFaceSad } from "react-icons/tfi";
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <Header/>
            <div className='not-found'>
                <TfiFaceSad className='sad'/>
                <p>404 Not Found</p>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound;