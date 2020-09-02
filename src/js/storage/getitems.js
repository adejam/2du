let items;
const getItems = databaseName => {
  items = localStorage.getItem(databaseName) ? JSON.parse(localStorage.getItem(databaseName)) : [];
  return items;
};

export default getItems;
