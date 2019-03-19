import React, { Component } from 'react';
import './Modal.css';
export default class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: this.props.active,
            done: null
        }
        typeof props.show === 'undefined' ?  this.show = this.show.bind(this) : this.show = props.show.bind(this)
        typeof props.close === 'undefined' ?  this.close = this.close.bind(this) : this.close = props.close.bind(this)
        typeof props.done === 'undefined' ?  this.done = this.done.bind(this) : this.done = props.done.bind(this)
    }
    show() {
        this.setState({
            show: true
        })
    }
    close() {
        this.setState({
            show: false
        })
    }
    done(input) {
        let output = typeof input === 'undefined' ? input : 'Exited modal'
        this.setState({
            show: false,
            done: input
        })
    }
    render() {
        console.log('Modal')
        return (
            <div className="modal-wrapper">
                <div className={"modal"}>
                    <h2>Add a planet</h2>
                    <i style={ {float: 'right'} }>close_icon</i>
                    <hr/>
                    <span>Name</span><input type="text"/>
                    <br/>
                    <span>Type</span><input type="text"/>
                </div>
            </div>
        )
    }
}