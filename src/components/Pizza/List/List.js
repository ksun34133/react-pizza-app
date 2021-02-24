import Spinner from "../../UI/Spinner/Spinner";
import Item from "../Item/Item";

const List = (props) => {
  let listItems = props.listData.map((info) => (
    <Item
      key={info.id}
      info={info}
      topingOptions={props.topingOptions}
      sizeOptions={props.sizeOptions}
      crustOptions={props.crustOptions}
      priceOptions={props.priceOptions}
      orderItems={props.orderItems}
      addToOrder={props.addToOrder}
      updateOrder={props.updateOrder}
      removeFromOrder={props.removeFromOrder}
    />
  ));
  return <>{listItems.length ? listItems : <Spinner />}</>;
};

export default List;
