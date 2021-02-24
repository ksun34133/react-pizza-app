import * as consData from "../../assets/list";

const initialState = {
  topings: consData.topings,
  pizzas: consData.pizzaList,
  types: consData.types,
  crustList: consData.crustList,
  sizeList: consData.sizeList,
  priceList: consData.priceList,
  orderItems: [],
  orderItemList: [],
  totalPrice: 0,
};

const findPizzaItem = (items, id) => {
  const objData = items.filter((obj) => obj.id === id);
  return objData[0];
};

const returnItemObject = (
  item,
  newCrust,
  newSize,
  newPrice,
  itemCount,
  topings
) => {
  const newItem = {
    id: item.id,
    title: item.title,
    type: item.type,
    crust: newCrust,
    price: newPrice,
    size: newSize,
    image: item.image,
    description: item.description,
    topings: topings,
    count: itemCount,
  };

  return newItem;
};

const createNewCartIem = (state, payload, itemprice, topings) => {
  let itemCount = 1;
  const pizzaItem = findPizzaItem(state.pizzas, payload.objId);
  let orderItemList = [];
  console.log("add payload: ", JSON.stringify(payload));
  console.log("add state.orderItemList 11", state.orderItemList);
  console.log(
    "add state.orderItemList 22",
    JSON.stringify(state.orderItemList)
  );
  if (state.orderItemList.length) {
    const existSamePizza = state.orderItemList.filter(
      (obj) =>
        payload.objId === obj.id &&
        obj.crust === payload.itemCrust &&
        obj.size === payload.itemSize
    )[0];
    if (existSamePizza) {
      orderItemList = state.orderItemList.map((item) =>
        payload.objId === item.id &&
        item.crust === payload.itemCrust &&
        item.size === payload.itemSize
          ? {
              ...item,
              price: itemprice,
              count: parseInt(item.count) + 1,
            }
          : item
      );
    } else {
      const newCartItem = returnItemObject(
        pizzaItem,
        payload.itemCrust,
        payload.itemSize,
        itemprice,
        itemCount,
        topings
      );
      orderItemList = [...state.orderItemList, newCartItem];
    }
  } else {
    const newCartItem = returnItemObject(
      pizzaItem,
      payload.itemCrust,
      payload.itemSize,
      itemprice,
      itemCount,
      topings
    );
    orderItemList = [...state.orderItemList, newCartItem];
  }
  return orderItemList;
};

const removeCartItem = (state, payload, itemPrice) => {
  let orderItemList = [...state.orderItemList];
  console.log("mmmmmmmmmmmmm----", state.orderItemList.length);
  let index = orderItemList.findIndex(
    (item) =>
      payload.objId === item.id &&
      item.crust === payload.itemCrust &&
      item.size === payload.itemSize
  );
  console.log("index: ", index);
  if (index >= 0) {
    if (orderItemList[index].count === 1) {
      console.log(" my count is one");
      delete orderItemList[index];
      orderItemList = orderItemList.filter(
        (item) =>
          payload.objId !== item.id &&
          item.crust !== payload.itemCrust &&
          item.size !== payload.itemSize
      );
      console.log("udpated items");
      console.log(orderItemList);
    } else {
      orderItemList.map((item) =>
        payload.objId === item.id &&
        item.crust === payload.itemCrust &&
        item.size === payload.itemSize
          ? {
              ...item,
              price: itemPrice,
              count: parseInt(item.count) - 1,
            }
          : item
      );
    }
  } else {
    orderItemList.map((item) =>
      payload.objId === item.id &&
      item.crust === payload.itemCrust &&
      item.size === payload.itemSize
        ? {
            ...item,
            price: itemPrice,
            count: parseInt(item.count) - 1,
          }
        : item
    );
  }

  // if (state.orderItemList.length) {
  //   orderItemList = state.orderItemList;
  //   const existSamePizza = orderItemList.filter(
  //     (obj) =>
  //       payload.objId === obj.id &&
  //       obj.crust === payload.itemCrust &&
  //       obj.size === payload.itemSize
  //   )[0];
  //   console.log(existSamePizza.count);
  //   if (existSamePizza) {
  //     if (existSamePizza.count === 1) {
  //       console.log("eeeeeeeeeeeeee-----------");
  //       console.log("yrtrt000000000000: ", orderItemList);
  //       let index = orderItemList.findIndex(
  //         (item) =>
  //           payload.objId === item.id &&
  //           item.crust === payload.itemCrust &&
  //           item.size === payload.itemSize
  //       );
  //       orderItemList[index].length = 0;
  //       console.log("index-------", index);
  //       if (index >= 0) {
  //         delete orderItemList[index];
  //       }
  //     } else {
  //       orderItemList.map((item) =>
  //         payload.objId === item.id &&
  //         item.crust === payload.itemCrust &&
  //         item.size === payload.itemSize
  //           ? {
  //               ...item,
  //               price: itemPrice,
  //               count: parseInt(item.count) - 1,
  //             }
  //           : item
  //       );
  //     }
  //   }
  // }

  console.log("final orderItemList", orderItemList);
  return orderItemList;
};

const calculatePriceWithToping = (state, payload, itemPrice) => {
  let vegPrice = 0;
  let nonvegPrice = 0;
  let finalPrice = 0;
  const topings = payload.itemToppings;
  if (topings.veg.length) {
    vegPrice =
      parseInt(topings.veg.length) *
      parseInt(state.priceList.toppings.veg[payload.itemSize]);
  }
  if (topings.nonveg.length) {
    nonvegPrice =
      parseInt(topings.nonveg.length) *
      parseInt(state.priceList.toppings.nonveg[payload.itemSize]);
  }

  finalPrice = parseInt(itemPrice) + parseInt(vegPrice) + parseInt(nonvegPrice);
  return finalPrice;
};

const addItemToOrder = (state, action) => {
  const orderItems = { ...state.orderItems };
  const orderId = parseInt(action.payload.objId);
  orderItems[orderId] = orderItems[orderId] + 1 || 1;
  const selItemPrice = state.priceList[action.payload.itemCrust];
  let itemprice = selItemPrice[action.payload.itemSize];

  const topings = action.payload.itemToppings;
  if (topings) {
    itemprice = calculatePriceWithToping(state, action.payload, itemprice);
  }

  const newTotal = state.totalPrice + itemprice;
  // Add item to cart list
  const orderItemList = createNewCartIem(
    state,
    action.payload,
    itemprice,
    topings
  );

  return {
    ...state,
    orderItems: orderItems,
    orderItemList: orderItemList,
    totalPrice: newTotal,
  };
};

const updateOrderItem = (state, action) => {
  console.log(action.payload);
};

const removeItemFromOrder = (state, action) => {
  console.log(action.payload);
  const orderItems = { ...state.orderItems };
  const orderId = parseInt(action.payload.objId);
  orderItems[orderId] = orderItems[orderId] - 1;
  const selItemPrice = state.priceList[action.payload.itemCrust];
  const itemprice = selItemPrice[action.payload.itemSize];
  const newTotal = state.totalPrice - itemprice;
  // Remove item from cart list
  const orderItemList = removeCartItem(state, action.payload, itemprice);

  if (orderItems[orderId] === 0) {
    delete orderItems[orderId];
  }
  console.log("ok ok ok ", orderItemList);
  console.log("ok ok ok ", orderItemList.length);

  return {
    ...state,
    orderItems: orderItems,
    orderItemList,
    totalPrice: newTotal,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER_ITEM":
      return addItemToOrder(state, action);
    case "UPDATE_ORDER_ITEM":
      return updateOrderItem(state, action);
    case "REMOVE_ORDER_ITEM":
      return removeItemFromOrder(state, action);
    default:
      return state;
  }
};

export default rootReducer;
