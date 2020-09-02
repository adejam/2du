import changeStatus from './changestatus';

const changeStatusLogic = (items, id) =>{
	for (let i = 0; i < items.length; i += 1) {
      if (items[i].id === id) {
        if (items[i].status === true) {
          items[i].status = false;
          changeStatus(false, id);
        } else {
          items[i].status = true;
          changeStatus(true, id);
        }
        break;
      }
    }
}


export default changeStatusLogic;