import React from 'react';

import '../styles/About.css';
import '../styles/styles.css';


class About extends React.Component {
    render() {
        return(
            <div className="component">
                <h1 className="header-title strong">About</h1>
                <div className="aboutme">
                    <p>{this.props.about}</p>
                </div>
            </div>
        );
    }
}

export default About;