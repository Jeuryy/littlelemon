import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const HomePage = (props) => {
    const testimonials = props.testimonials
    return (
        <div>
            <Header/>
            <Main  testimonials={testimonials}/>
            <About/>
            <Footer/>
        </div>
    )
}

export default HomePage