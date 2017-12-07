"use strict";

import React from 'react';


export default class UserComponent extends React.Component{

    render(){
        return (
            <table border="1">
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.phone}</td>
                </tr>
            </table>
        )
    }
}
