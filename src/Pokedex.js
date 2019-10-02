import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		let title;
		if (this.props.isWiner) {
			title = <h2 className='Pokedex-winner'>Winning Hand!</h2>;
		} else {
			title = <h2 className='Pokedex-loser'>Losing Hand!</h2>;
		}
		return (
			<div className='Pokedex'>
				{title}
				<p>Total Experience : {this.props.exp}</p>
				<div className='Pokedex-cards'>
					{this.props.pokemon.map((p) => (
						<Pokecard
							id={p.id}
							name={p.name}
							type={p.type}
							exp={p.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
