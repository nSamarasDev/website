import React, {Component} from 'react';
import Header from '../Common/Header.js';
import Timeline from '../Common/Timeline.js';
import Team from '../Common/Team.js';
import image from '../assets/img/about.jpg';
class About extends Component {
    render() {
        return (
          <div>
                 <Header 
                    title="About Us"
                    subtitle="IT'S really a greant story "
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={false}
                    image={image}
                />
                  <Timeline />
                  <Team />
            
          </div>

        )
    }
}

export default About;