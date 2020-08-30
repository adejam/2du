import createNewElement from './newelement';
import replaceElement from './replaceelement';
import todoRowInnerHtml from './todoRowInnerHtml';

const addItemToUi = item => ({
  todo: {
    add() {
      const todoRow = document.querySelector('#todoRow');
      const theClasses =
        'list_group_item list_group_item_action todo flex-column align-items-start ';
      const tagId = `tod${item.id}`;
      const rowInnerHtml = todoRowInnerHtml(item);
      const addArray = [
        todoRow,
        'article',
        theClasses,
        tagId,
        'data-filtered',
        item.selectProject,
        rowInnerHtml,
      ];
      createNewElement(...addArray);
    },
    edit() {
      const tagId = `tod${item.id}`;
      const rowInnerHtml = todoRowInnerHtml(item);
      replaceElement(tagId, rowInnerHtml);
    },
  },

  project: {
    add() {
      const projectRow = document.querySelector('#projectRow');
      const selectInputs = document.querySelectorAll('[data-select="selectinput"]');
      const inputIner = `${item.projectTitle}`;
      const inner = `${item.projectTitle}`;
      const attr = `${item.projectTitle}`;

      selectInputs.forEach(selectInput => {
        const selectProjectArray = [
          selectInput,
          'option',
          'myClass',
          `mySelect${item.id}`,
          'value',
          attr,
          inputIner,
        ];
        createNewElement(...selectProjectArray);
      });
      const projectRowArray = [
        projectRow,
        'li',
        'list_group_item filter',
        `myProject${item.id}`,
        'data-tofilter',
        item.projectTitle,
        inner,
      ];
      createNewElement(...projectRowArray);
    },
  },
});

export default addItemToUi;
