import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Content from './components/Content';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			info: {
				name: 'Abu Bakar Siddik Nayem',
				dept: 'Department of Computer Science & Engineering',
				institute: 'Independent University, Bangladesh(IUB)',
				email: 'nayem.abs@gmail.com'
			},
			content: {
				about: 'I am a Research Assistant at AGenCy Lab @IUB. I received my Bachelor of Science degree in \
				Computer Science at Independent University, Bangladesh(IUB). I have a very broad research interest \
				in Machine Learning and Computer Vision. My current research involves in land use land cover segmentation \
				using high spatial resolution satellite images.',

				publications: [
					{
						id: 1,
						title: 'A.B.S Nayeem, A Sarkar, A.A Ali, M.A. Amin, A.K.M Rahman, "LULC Segmentation of RGB Satellite \
						Image Using FCN-8", 3rd SLAAI International Conference on Artificial Intelligence, Sri Lanka , 2019'
					},
				],
				interests: [
					{id: 1, name: 'Machine Learning'},
					{id: 2, name: 'Computer Vision'},
					{id: 3, name: 'Artificial Intelligence'},
					{id: 4, name: 'Psychology'},
					{id: 5, name: 'Philosophy'},
				]
			}

		}
	}

	render() {
		return (
			<div className="App">
				<Sidebar info={this.state.info}/>
				<Content content={this.state.content}/>
			</div>
		);
	}
}

export default App;
