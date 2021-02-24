import CartItem from "../Cart/CartItem";
import Button from "../../UI/Button/Button";

const Cart = ({
  sizeOptions,
  crustOptions,
  orderItems,
  orderItemList,
  totalPrice,
  addToOrder,
  removeFromOrder,
  checkoutClicked,
}) => {
  console.log(orderItems)
  let cartItems = orderItemList.map((item, index) => (
    <CartItem
      key={index}
      itemData={item}
      sizeOptions={sizeOptions}
      crustOptions={crustOptions}
      addToOrder={addToOrder}
      removeFromOrder={removeFromOrder}
    />
  ));

  return (
    <>
      <div className="CartItems">{orderItemList.length ? cartItems : null}</div>
      {totalPrice ? (
        <div className="CartItemsTotal">
          <div className="CartItemsTotalPrice">Subtotal: INR {totalPrice}</div>
          <div className="CartItemsCheckout">
            {/* <button type="button" onClick={checkoutClicked}>
              Checkout
            </button> */}
            <Button btnType="Success" clicked={() => checkoutClicked}>
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="CartEmpty">
          <div className="CartEmptyTitle">YOUR CART IS EMPTY</div>
          <div className="CartEmptyText">
            Please add some items from the menu.
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
