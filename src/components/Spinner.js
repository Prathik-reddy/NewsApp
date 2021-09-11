import React, { Component } from 'react'
import loader from './loader.gif'
export default class spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loader} alt="loading" srcSet="" />
            </div>
        )
    }
}
