import React, {Component} from 'react';
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'
// Reusable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import About from '../Pages/About.js';
import Contact from '../Pages/Contact.js'



class Home extends Component {

    render(){
        return (
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />
                <Portfolio />
                <About />
                <Contact />


                
                
                {/* <Team /> */}

            </div>
        )
    }
}

export default Home;