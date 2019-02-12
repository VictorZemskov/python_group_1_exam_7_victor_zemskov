import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Burger from './components/Burger/Burger';
import Items from "./Items/Items";
import Order from  "./Order/Order";

const availableItems = {
    hamburger: {price: 80, label: 'Hamburger'},
    cheeseburger: {price: 90, label: 'Cheeseburger'},
    fries: {price: 45, label: 'Fries'},
    coffee: {price: 70, label: 'Coffee'},
    tea: {price: 50, label: 'Tea'},
    cola: {price: 40, label: 'Cola'},
};

class App extends Component {
  state = {
    items: {
      hamburger: {count: 0, total: 0},
      cheeseburger: {count: 0, total: 0},
      fries: {count: 0, total: 0},
      coffee: {count: 0, total: 0},
      tea: {count: 0, total: 0},
      cola: {count: 0, total: 0},
    }
  };

  addItem = (name) => {
    let item = {...this.state.items[name]};
    item.count += 1;
    item.total = item.count * availableItems[name].price;

    let items = {...this.state.items};
    items[name] = item;

    let state = {...this.state};
    state.items = items;

    this.setState(state);
  };

  removeItem = (name) => {
    let item = {...this.state.items[name]};
    if(item.count > 0) {
      item.count -= 1;
    }
    item.total = item.count * availableItems[name].price;


    let items = {...this.state.items};
    items[name] = item;

    let state = {...this.state};
    state.items = items;

    this.setState(state);
  };

  getTotal = () => {
    let result = this.state.items.hamburger.total +
                 this.state.items.cheeseburger.total +
                 this.state.items.fries.total +
                 this.state.items.coffee.total +
                 this.state.items.tea.total +
                 this.state.items.cola.total;

    return result;
  };



  render() {
    return (
      <div className="App">
        <div className="Order_details">
          <h4>Order details</h4>
          <Order items={this.state.items}
                 onRemoveItem={this.removeItem}
                 isGetTotal={this.getTotal()}
          />
        </div>
      <div className="Add_items">
         <h4>Add items</h4>
         <Items
           onAddItem={this.addItem}
           availableItems = {availableItems}
         />
      </div>
      </div>
    );
  }
}

export default App;