import getItems from './getitems';
import removeFromUi from './removefromui';

function removeBookOrChangeStatus(e) {
  e.preventDefault();
  if (e.target.classList.contains('removeBtn')) {
    const databaseName = e.target.dataset.databasename;
    // console.log(databaseName);
    const items = getItems(databaseName);
    let index = -1;
    const id = parseInt(e.target.id, 10);
    for (let i = 0; i < items.length; i += 1) {
      index += 1;
      if (items[i].id === id) {
        items.splice(index, 1);
        break;
      }
    }

    localStorage.setItem(databaseName, JSON.stringify(items));
    removeFromUi(e.target);
  } else if (e.target.classList.contains('changeStatus')) {
    // const id = parseInt(e.target.dataset.identity, 10);
    // const books = getBooks();
    // for (let i = 0; i < books.length; i += 1) {
    //   if (books[i].id === id) {
    //     if (books[i].readStatus === true) {
    //       books[i].readStatus = false;
    //       const message = 'You should read this book!';
    //       changeStatus(false, id, message);
    //     } else {
    //       books[i].readStatus = true;
    //       const message = 'You have read this book!';
    //       changeStatus(true, id, message);
    //     }
    //     break;
    //   }
    // }
    // localStorage.setItem('book', JSON.stringify(books));
  }
}

export default removeBookOrChangeStatus;
