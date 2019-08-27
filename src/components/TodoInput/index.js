import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <div>
                <input style={{'color':'red'}} type='text'/><button>{this.props.btnText}</button>
            </div>
        )
    }
}
