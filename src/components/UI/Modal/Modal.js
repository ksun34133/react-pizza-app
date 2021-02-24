import React, { useState } from "react";

import Button from "../Button/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const MyModal = (props) => {
  const [itemCrust, setItemCrust] = useState(props.info.crust);
  const [itemPrice, setItemPrice] = useState(props.info.price);
  const [itemSize, setItemSize] = useState(props.info.size);
  const [itemToppings, setItemToppings] = useState({ veg: [], nonveg: [] });
  // const itemToppings = { veg: [], nonveg: [] };

  const updateChangeHandler = (event, type) => {
    let selSize = itemSize;
    let selCrust = itemCrust;

    if (type === "size") {
      selSize = event.target.value;
      setItemSize(event.target.value);
    } else if (type === "crust") {
      selCrust = event.target.value;
      setItemCrust(event.target.value);
    }

    const selItemPrice = props.priceOptions[selCrust];
    setItemPrice(selItemPrice[selSize]);
  };

  const updateTopingChangeHandler = (event, type, value) => {
    if (type === "veg") {
      if (itemToppings.veg.indexOf(value) < 0) {
        itemToppings.veg.push(value);
      }
    } else if (type === "nonveg") {
      if (itemToppings.nonveg.indexOf(value) < 0) {
        itemToppings.nonveg.push(value);
      }
    }
    setItemToppings(itemToppings);
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        animation
      >
        <Modal.Body>
          <div className="ModalPizzaItem">
            <span className="ModalPizzaTypeIcon">
              <img
                src={"../images/" + props.info.type + ".svg"}
                width="20"
                alt={props.info.type}
              />
            </span>
            <img
              src={"../images/" + props.info.image}
              width="300"
              height="200"
              alt={props.info.title}
            />
            <div className="ModalItemtitle">{props.info.title}</div>
            <div className="ModalItemdesc">{props.info.description}</div>
            <div className="ModalItemprice">INR {itemPrice}</div>
            <div className="ModalItemSizeCrust">
              <select
                name="size"
                value={itemSize}
                onChange={(event) => updateChangeHandler(event, "size")}
                className="form-control"
              >
                {Object.entries(props.sizeOptions).map(function ([
                  index,
                  option,
                ]) {
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
                {Object.entries(props.crustOptions).map(function ([
                  index,
                  option,
                ]) {
                  return (
                    <option value={index} key={index}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="ModalItemToppings">
              <h3 className="HeadingTopping">
                Add Veg Toppings @ {props.priceOptions.toppings.veg[itemSize]}{" "}
                each
              </h3>
              <div className="VegToppings">
                {Object.entries(props.topingOptions.veg).map(function ([
                  index,
                  toppingText,
                ]) {
                  return (
                    <div
                      key={"veg_" + index}
                      className={
                        itemToppings.veg.indexOf(index) >= 0
                          ? "Topping ToppingSelected"
                          : "Topping"
                      }
                      onClick={(event) =>
                        updateTopingChangeHandler(event, "veg", index)
                      }
                    >
                      {toppingText}
                    </div>
                  );
                })}
              </div>
              <h3 className="HeadingTopping">
                Add Non-Veg Toppings @{" "}
                {props.priceOptions.toppings.nonveg[itemSize]} each
              </h3>
              <div className="NonVegToppings">
                {Object.entries(props.topingOptions.nonveg).map(function ([
                  index,
                  toppingText,
                ]) {
                  return (
                    <div
                      key={"nonveg_" + index}
                      className={
                        itemToppings.nonveg.indexOf(index) >= 0
                          ? "Topping ToppingSelected"
                          : "Topping"
                      }
                      onClick={(event) =>
                        updateTopingChangeHandler(event, "nonveg", index)
                      }
                    >
                      {toppingText}
                    </div>
                  );
                })}
              </div>
            </div>
            <Button
              btnType="Success"
              clicked={() => {
                props.addToOrder(props.info.id, itemSize, itemCrust, itemToppings);
                props.modalClosed();
              }}
            >
              Add to cart
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyModal;
