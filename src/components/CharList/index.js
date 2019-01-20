import React from 'react';

import CharListElement from '../CharListElement';

import './style.css';

class CharList extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			chars: []
		}

	}


	createHeroElement = () => {
		const {chars} = this.state;
		if(chars.length){
			return chars.map(hero => <CharListElement key={hero.id} hero={hero}/>);
		}
		return <div>No heroes yet</div>
	}

	render(){
		console.log("render");
		return(
			<div className="Home__ShowcaseWrapper">
				<div className="Home__ShowcaseInner">
					{this.createHeroElement()}
				</div>
			</div>	
		);
	
	}	

	componentDidMount(){
		fetch('https://rickandmortyapi.com/api/character/')
		.then(res => res.json())
		.then( res => {
			this.setState({chars: res.results});
		}
		);
	}
};

export default CharList;