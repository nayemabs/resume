import React from 'react';

import '../styles/Publicaions.css';
import '../styles/styles.css';

class Publicaions extends React.Component {
    render() {
        const interests = this.props.interests;
        const interestList = interests.map(interest => {
            return(
                <li className="item-name" key={interest.id}>{interest.name}</li>
            );
        })

        return(
            <div className="component">
                <h1 className="header-title strong">Interests</h1>
                <div className="publications-list">
                    <ul className="list-style-view">
                        {interestList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Publicaions;