import React, {Component} from "react";
import {fetchChars} from '../actions'
import Character from "./Character";
import {connect} from 'react-redux'

class CharacterList extends Component {

  constructor(props) {
      super(props);
  }

  componentDidMount(){
      this.props.fetchChars();
  }

  render(){
  return (
    <ul>
      {this.props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
}
};

const mapStateToProps = state => {
  return {
      characters: state.characters,
      fetching: state.fetching,
      error: state.error,
  }
}

export default connect(mapStateToProps,{fetchChars})(CharacterList);
