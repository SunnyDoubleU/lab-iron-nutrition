import React, { Component } from 'react';
import './Foodbox.scss'


class FoodBox extends Component {
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value="1"
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info"
                                    onClick={() => {
                                        this.props.toListHandler(this.props.food)
                                    }}> + </button>
                                <button className="button is-info"
                                    onClick={() => {
                                        this.props.deleteFood(this.props.index)
                                    }}><img className="foodBin" src="https://icon-library.net/images/trash-can-icon-transparent/trash-can-icon-transparent-26.jpg" alt="bin" /></button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default FoodBox;