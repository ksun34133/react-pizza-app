import "./Cart.css";

const CartItem = ({
  itemData,
  totalCount,
  totalPrice,
  addToOrder,
  removeFromOrder,
}) => {
  return (
    <>
      <div className="CartItem">
        <img
          src={"../images/" + itemData.image}
          width="30"
          alt={itemData.title}
        />
        <div className="CartItemTitle">{itemData.title}</div>
        <div className="CartItemDesc">{itemData.description}</div>
        <div className="CartItemCrsutSize">
          {itemData.crust + " - " + itemData.size}
        </div>
        {itemData.topings ? (
          <div className="CartItemTopings">
            {itemData.topings.veg.map((vegTop, index) => {
              console.log('vegTop', vegTop)
              return <span className="ItemTopping" key={'vegtop' + index}>{vegTop},</span>;
            })}
            {itemData.topings.nonveg.map((nonvegTop, index) => {
              return <span className="ItemTopping" key={'nonvegtop' + index}>{nonvegTop},</span>;
            })}
          </div>
        ) : null}
        <div className="CartItemCounter">
          <div
            className="CartItemMinus"
            onClick={() =>
              removeFromOrder(itemData.id, itemData.size, itemData.crust)
            }
          >
            -
          </div>
          <div className="CartItemCount">{itemData.count}</div>
          <div
            className="CartItemPlus"
            onClick={() =>
              addToOrder(itemData.id, itemData.size, itemData.crust)
            }
          >
            +
          </div>
        </div>
        <div className="CartItemPrice">
          INR {itemData.price * itemData.count}
        </div>
      </div>
    </>
  );
};

export default CartItem;
