import React, {Component} from 'react';
import TeamItem from './TeamItem';

import img1 from "../assets/img/team/1.jpg";
import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";

const team = [
    {title: 'Diana Petersen', subtitle: 'Lead Designer', image: img1}, 
    {title: 'Larry Parker', subtitle: 'Lead Marketer', image: img2},
    {title: 'Alyissa ', subtitle: 'Lead Developer', image: img3}
];

class Team extends Component {

    render() {
        return(
            <section class="bg-light" id="team">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div class="row">
                    {team.map((item, index) => {
                        return <TeamItem {...item} key={index} />
                    })}
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                      <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                  </div>
            </section>
        )
    }
}

export default Team