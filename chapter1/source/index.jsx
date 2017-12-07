"use strict";

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <h1> Hello World! Welcome to React JS.</h1>;
  }
}

render(<App/>, document.getElementById('app'));