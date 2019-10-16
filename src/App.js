import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import foods from './data/foods.json'
import FoodBox from './components/FoodBox';

class App extends Component {

  state = {
    foods: foods,
    filteredFoods: foods,
    todaysFoods: [],
    totalCalories: 0
  }

  searchHandler = (e) => {
    var searchQuery = e.target.value
    var searchResult = this.state.foods.filter((food) =>
      food.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    )
    this.setState({ filteredFoods: searchResult })
  }


  toListHandler = (food) => {
    console.log(food)
    var newList = [...this.state.todaysFoods]
    console.log(newList.includes(food))
    if (newList.includes(food)) {
      var foodCalories = this.state.totalCalories + food.calories
      food.calories = food.calories + food.calories
      food.quantity++
    } else {
      var foodCalories = this.state.totalCalories + food.calories
      food.quantity++
      newList.push(food)
    }

    this.setState({
      todaysFoods: newList,
      totalCalories: foodCalories
    })
  }

  deleteHandler = (indexN) => {
    var newFoods = [...this.state.filteredFoods];
    newFoods.splice(indexN, 1);
    this.setState({ filteredFoods: newFoods });
  }

  addFood = () => {
    var display = document.getElementById("Form")
    display.setAttribute(display, "visible");
  }

  submit = () => {
    document.getElementById("Form")
  }

  render() {
    return (
      <div className="AppRow">
        <div className="box" >
          <input className="AppSearch" onChange={this.searchHandler} type="text" placeholder="Search food" />
          <button className="button is-info">Add New</button>
          {
            this.state.filteredFoods.map((food, index) =>
              <FoodBox
                food={food}
                toListHandler={this.toListHandler}
                deleteFood={this.deleteHandler}
                index={index}
              />)
          }
        </div>

        <div>
          <h1><strong>Today's Foods</strong></h1>
          <ul>
            {this.state.todaysFoods.map((food) =>
              <li>{food.quantity} {food.name} = {food.calories} cal</li>
            )}
          </ul>
          <h3>Total Calories: {this.state.totalCalories}</h3>
        </div>
        <div id="Form">
          {

          }
        </div>
      </div>
    );
  }
}

export default App;
