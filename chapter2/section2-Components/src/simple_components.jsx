"use strict";

import React from 'react';

export class HeaderComponent extends React.Component{
    render() {
        var reactStyle = {
            'backgroundColor': '#20232a'
            , 'color': '#61dafb'
        }
        return (
            <div>
                <h1 style={reactStyle}>Welcome - React JS</h1>
            </div>
        )
    }
}

export class ContentComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Hi ReactJs User. This is the content Component.</h2>
            </div>
        )
    }
}

export class FooterComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>See you soon. This is the Footer Component.</h3>
            </div>
        )
    }
}
