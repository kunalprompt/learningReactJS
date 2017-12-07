"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import {HeaderComponent, ContentComponent, FooterComponent} from './simple_components.jsx';
import UserComponent from './props_components.jsx';
import StatefulComponent from './state_components.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Stateless Component
                </h1>
                <HeaderComponent />
                <ContentComponent />
                <FooterComponent />
                <h1>
                    Component with Props
                </h1>
                <UserComponent name='Rama' email='rama@gmail.com' phone='000000'/>
                <UserComponent name='Albin' email='albin@gmail.com' phone='000001'/>
                <h1>
                    Stateful Component
                </h1>
                <StatefulComponent/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
