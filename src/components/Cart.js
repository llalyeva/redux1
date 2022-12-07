import React, { Component } from "react";
import "../styles.css";

import CartItem from './CartItem';

export default class Cart extends Component {
  state = {
    cartGoods: []
  }
  getTotal() {
    const { cartGoods } = this.state;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.state.cartGoods.length ?
          <ul className="cart__list">
            {this.state.cartGoods.map((item) => (
              <li className="cart__list-item" key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }
        
        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ 
        cartGoods: state.cart 
      });
    });

}
}
