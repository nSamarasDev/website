import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;

class TeamItem extends Component {

    render() {

        return(
        
            <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
              <h4>{this.props.title}</h4>
              <p className="text-muted">{this.props.subtitle}</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <Link href={this.props.link}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href={this.props.link}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                <Link className={this.props.link}>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  </li>
                </ul>
              </div>
            </div>
          
        )
    }

}

export default TeamItem;