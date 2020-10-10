const database = {
  getItems(databaseName) {
    return localStorage.getItem(databaseName) ? JSON.parse(localStorage.getItem(databaseName)) : [];
  },
  setItemToDatabase(databaseName, items) {
    return localStorage.setItem(databaseName, JSON.stringify(items));
  },
};
export default database;
