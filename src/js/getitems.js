const getItems = databaseName => {
  let items;
  /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
  localStorage.getItem(databaseName) === null
    ? (items = [])
    : (items = JSON.parse(localStorage.getItem(databaseName)));

  return items;
};

export default getItems;
