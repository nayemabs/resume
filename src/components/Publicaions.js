import React from 'react';

import '../styles/Publicaions.css';
import '../styles/styles.css';

class Publicaions extends React.Component {
    render() {
        const publications = this.props.publications;

        const publicationList = publications.map(publication => {
            return(
                <li className="item-name" key={publication.id.toString()}>{publication.title}</li>
            );
        })

        return(
            <div className="component">
                <h1 className="header-title strong">Publication</h1>
                <div className="publications-list">
                    <ul className="list-style-view">
                        {publicationList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Publicaions;