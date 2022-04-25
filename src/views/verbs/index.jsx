import React from 'react';
import '../../assets/css/style.css'; 

import Conjugation from './conjugation';

class Verbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infinitive: 'mangiare'
    }
  }

  render() {
    return(
      <>
        <Header verb={this.state.infinitive}/>
        <Conjugation />
      </>
    );
  }
}

function Header(props) {
  return(
    <h1>{props.verb}</h1>
  );
}

export default Verbs;
