function getItems(databaseName) {
  let items;
  if (localStorage.getItem(databaseName) === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem(databaseName));
  }

  return items;
}

export default getItems;
