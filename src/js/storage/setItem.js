const setItemToDatabase = (databaseName, items) => {
  localStorage.setItem(databaseName, JSON.stringify(items));
};

export default setItemToDatabase;
