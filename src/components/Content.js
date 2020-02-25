import React, {Component} from 'react';

import About from './About';
import Publicaions from './Publicaions';
import Interest from './Interest';
import '../styles/Content.css';


export default class Content extends Component {
    render() {
        const content = this.props.content;
        return(
            <div className="content">
				<About about={content.about} />
                <Publicaions publications={content.publications}/>
                <Interest interests={content.interests}/>
            </div>
        );
    }
}