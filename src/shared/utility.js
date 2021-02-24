export const getMaxIdFromArray = (arr) => {
  let max = arr.reduce((maxId, item) => (maxId > item.id ? maxId : item.id), 0);
  return max + 1;
};
