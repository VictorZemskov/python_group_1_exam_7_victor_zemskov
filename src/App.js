import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Burger from './components/Burger/Burger';
import Items from "./Items/Items";
import Order from  "./Order/Order";

const availableIngredients = {
    hamburger: {price: 80, label: 'Hamburger'},
    cheeseburger: {price: 90, label: 'Cheeseburger'},
    fries: {price: 45, label: 'Fries'},
    coffee: {price: 70, label: 'Coffee'},
    tea: {price: 50, label: 'Tea'},
    cola: {price: 40, label: 'Cola'},
};

class App extends Component {
  state = {
    ingredients: {
      hamburger: {count: 0, total: 0},
      cheeseburger: {count: 0, total: 0},
      fries: {count: 0, total: 0},
      coffee: {count: 0, total: 0},
      tea: {count: 0, total: 0},
      cola: {count: 0, total: 0},
    }
  };

  addIngredient = (name) => {
    let ingredient = {...this.state.ingredients[name]};
    ingredient.count += 1;
    ingredient.total = ingredient.count * availableIngredients[name].price;

    let ingredients = {...this.state.ingredients};
    ingredients[name] = ingredient;

    let state = {...this.state};
    state.ingredients = ingredients;

    this.setState(state);
  };

  removeIngredient = (name) => {
    let ingredient = {...this.state.ingredients[name]};
    if(ingredient.count > 0) {
      ingredient.count -= 1;
    }
    ingredient.total = ingredient.count * availableIngredients[name].price;


    let ingredients = {...this.state.ingredients};
    ingredients[name] = ingredient;

    let state = {...this.state};
    state.ingredients = ingredients;

    this.setState(state);
  };

  getTotal = () => {
    let result = this.state.ingredients.hamburger.total +
                 this.state.ingredients.cheeseburger.total +
                 this.state.ingredients.fries.total +
                 this.state.ingredients.coffee.total +
                 this.state.ingredients.tea.total +
                 this.state.ingredients.cola.total;

    return result;
  };

  

  render() {
    return (
      <div className="App">
        <div className="Order_details">
          <h4>Order details</h4>
          <Order ingredients={this.state.ingredients}
                 onRemoveIngredient={this.removeIngredient}
          />
            <hr/>
          <div className="TotalPrice">Total Price:<b> {this.getTotal()} KGS</b></div>
        </div>


          <div className="Add_items">
            <h4>Add items</h4>
              <Items
                  onAddIngredient={this.addIngredient}
                  ingredients = {availableIngredients}
              />
          </div>
      </div>
    );
  }
}

export default App;