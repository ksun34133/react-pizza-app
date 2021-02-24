import { useState } from "react";

import "./Item.css";
import Button from "../../UI/Button/Button";
import MyModal from "../../UI/Modal/Modal";

const Item = ({
  info,
  topingOptions,
  sizeOptions,
  crustOptions,
  priceOptions,
  orderItems,
  addToOrder,
  updateOrder,
  removeFromOrder,
}) => {
  const [customizing, setCustomizing] = useState(false);
  const [itemCrust, setItemCrust] = useState(info.crust);
  const [itemPrice, setItemPrice] = useState(info.price);
  const [itemSize, setItemSize] = useState(info.size);

  const customizeCancelHandler = () => {
    setCustomizing(false);
  };

  const customizeHandler = () => {
    setCustomizing(true);
  };

  const updateChangeHandler = (event, type) => {
    let selSize = itemSize;
    let selCrust = itemCrust;

    if (type === "size") {
      setItemSize(event.target.value);
      selSize = event.target.value;
    }
    if (type === "crust") {
      setItemCrust(event.target.value);
      selCrust = event.target.value;
    }
    const selItemPrice = priceOptions[selCrust];
    setItemPrice(selItemPrice[selSize]);
  };

  const itemCount = orderItems[parseInt(info.id)];
  let addToCardData = (
    <Button
      btnType="Success"
      clicked={() => addToOrder(info.id, itemSize, itemCrust)}
    >
      Add to cart
    </Button>
  );
  if (itemCount !== undefined) {
    addToCardData = (
      <div className="CartItemCounter">
        <div
          className="CartItemMinus"
          onClick={() => removeFromOrder(info.id, itemSize, itemCrust)}
        >
          -
        </div>
        <div className="CartItemCount">{itemCount}</div>
        <div
          className="CartItemPlus"
          onClick={() => addToOrder(info.id, itemSize, itemCrust)}
        >
          +
        </div>
      </div>
    );
  }
  return (
    <>
      <MyModal
        show={customizing}
        modalClosed={customizeCancelHandler}
        onHide={customizeCancelHandler}
        info={info}
        topingOptions={topingOptions}
        sizeOptions={sizeOptions}
        crustOptions={crustOptions}
        priceOptions={priceOptions}
        addToOrder={addToOrder}
      ></MyModal>
      <div className="PizzaItem">
        <span className="PizzaTypeIcon">
          <img
            src={"../images/" + info.type + ".svg"}
            width="10"
            alt={info.type}
          />
        </span>
        <img src={"../images/" + info.image} width="100" alt={info.title} />
        <div className="Itemtitle">{info.title}</div>
        <div className="Itemdesc">{info.description}</div>
        <div className="Itemprice">INR {itemPrice}</div>
        <div className="ItemSizeCrust">
          <select
            name="size"
            value={itemSize}
            onChange={(event) => updateChangeHandler(event, "size")}
            className="form-control"
          >
            {Object.entries(sizeOptions).map(function ([index, option]) {
              return (
                <option value={index} key={index}>
                  {option}
                </option>
              );
            })}
          </select>
          <select
            name="crust"
            value={itemCrust}
            onChange={(event) => updateChangeHandler(event, "crust")}
            className="form-control"
          >
            {Object.entries(crustOptions).map(function ([index, option]) {
              return (
                <option value={index} key={index}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        {addToCardData}
        {/* <button type="button" onClick={() => addToOrder(info.id, itemSize, itemCrust)}>
          Add to cart
        </button> */}
        <Button btnType="Success" clicked={() => customizeHandler()}>
          Customize
        </Button>
      </div>
    </>
  );
};

export default Item;
