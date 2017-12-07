"use strict";

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        var newSwag = {
            'fontSize': '16px'
            , 'color': '#000000'
            , 'backgroundColor': '#efefef'
        }
        return (
            <div style={newSwag}>
                <h1>Think One</h1>
                <h2>Thick Twice</h2>
                <p>This is the element nesting!!</p>
                <p>Do you know 1+1 = ? Answer = {1+1}</p>
                {/* JSX also allows multiline comments */}
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
