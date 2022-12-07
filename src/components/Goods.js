import React, { Component } from "react";
import "../styles.css";
import store from "../redux/reducers/store.js"
import GoodsItem from './GoodsItem';
import { connect } from "react-redux";




class Goods extends Component {
  state = {
    goods: [  ]
  }


  componentDidMount(){
    const state = store.getState();
    this.setState({ goods: state.goods });
  }

  

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) =>
{  
  console.log("mapStateToProps is executed. Goods are updated");
  return{
    goods: state.goods
  }
}
export default connect(mapStateToProps)(Goods);