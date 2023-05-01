import { Component } from "react";
import './PokeCard.css'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokeCard extends Component {

    render() {
        let imageSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

        return (
            <div className="PokeCard">
                <h2 className='PokeCard_title'>{this.props.name}</h2>
                
                    <div className='PokeCard_Image'>
                        <img src={imageSrc} alt={this.props.name} />
                    </div>
                    <div className='PokeCard_Type'>
                       <div className="PokeCard-data">Type: {this.props.type}</div>
                        <div className="PokeCard-data">Exp: {this.props.Experience}</div>
                    </div>
            </div>
        );
    }
}

export default PokeCard;
