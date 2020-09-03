import searchFunc from './searchFunc';
import listToShow from '../dom/listToShow';
import filterTodo from './filter';

const filterValues = {
  search({ target: { value } }) {
    const filteredArrays = searchFunc(value);
    listToShow(filteredArrays);
  },
  filter({
    target: {
      classList,
      dataset: { tofilter },
    },
  }) {
    if (classList.contains('filter')) {
      const arrays = filterTodo(tofilter);
      listToShow(arrays);
    }
  },
};
export default filterValues;
