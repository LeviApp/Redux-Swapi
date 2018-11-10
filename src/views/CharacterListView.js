import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {FETCHING, SUCCESS, FAILURE} from '../actions'
class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChars()
    // call our action
  }

  render() {
    if (this.props.fetching) {
     return 'Your data is coming from a galaxy far, far away' // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  characters: state.characters,
  fetching: state.fetching,
  error: state.error,
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
FETCHING, SUCCESS, FAILURE  }
)(CharacterListView);
