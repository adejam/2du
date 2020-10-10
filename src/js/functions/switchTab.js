import filterTodos from './filter/filterTodos';

const switchTab = ({ target: { classList, id } }) => {
  if (classList.contains('filterLink')) {
    const filterLinks = document.querySelectorAll('.filterLink');
    for (let i = 0; i < filterLinks.length; i += 1) {
      const { classList: filterLinksClassList, id: filterLinksId } = filterLinks[i];
      if (id === filterLinksId) {
        filterLinksClassList.add('active');
      } else {
        filterLinksClassList.remove('active');
      }
    }
    filterTodos(id);
  }
};

export default switchTab;
