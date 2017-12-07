"use strict";

import React from 'react';

export default class StatefulComponent extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }
        this.modifyState = this.updateComponentState.bind(this);
    };
    
    updateComponentState() {
        var state_data = this.state.data;
        this.setState({data: state_data + 1});
    }
    
    render() {
        var stateStyle = {
            'border': '1px solid #EFEFEF'
            , 'padding': '10'
        }
        var btnStyle = {
            'backgroundColor': '#000000'
            , 'color': '#FFFFFF'
            , 'height': '30'
            , 'width': 200
        }
        return (
            <div>
                <div style={stateStyle}>Current State - {this.state.data}</div>
                <button style={btnStyle} onClick={this.modifyState}>Modify State - Increment</button>
            </div>
        );
    }
}
