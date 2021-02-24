import List from "../components/Pizza/List/List";
import Cart from "../components/Pizza/Cart/Cart";

import { connect } from "react-redux";

import "./PizzaContainer.css";

const PizzaContainer = (props) => {
  return (
    <div className="MainContainer">
      <div className="PizzaList">
        <List
          listData={props.list}
          topingOptions={props.topings}
          sizeOptions={props.sizeList}
          crustOptions={props.crustList}
          priceOptions={props.priceList}
          orderItems={props.orderItems}
          addToOrder={props.onAddToOrder}
          updateOrder={props.onUpdateOrder}
          removeFromOrder={props.onRemovedItem}
        />
      </div>
      <div className="PizzaCart">
        <Cart
          sizeOptions={props.sizeList}
          crustOptions={props.crustList}
          orderItems={props.orderItems}
          orderItemList={props.orderItemList}
          totalPrice={props.totalPrice}
          addToOrder={props.onAddToOrder}
          removeFromOrder={props.onRemovedItem}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.pizzas,
    topings: state.topings,
    sizeList: state.sizeList,
    crustList: state.crustList,
    priceList: state.priceList,
    orderItems: state.orderItems,
    orderItemList: state.orderItemList,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemovedItem: (objId, itemSize, itemCrust) =>
      dispatch({
        type: "REMOVE_ORDER_ITEM",
        payload: { objId, itemSize, itemCrust },
      }),
    onAddToOrder: (objId, itemSize, itemCrust, itemToppings) =>
      dispatch({
        type: "ADD_ORDER_ITEM",
        payload: { objId, itemSize, itemCrust, itemToppings },
      }),
    onUpdateOrder: (type, orderId) =>
      dispatch({ type: "UPDATE_ORDER_ITEM", payload: { type, orderId } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
