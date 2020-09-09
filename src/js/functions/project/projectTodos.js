import listToShow from '../../dom/listToShow';
import getTodosByProject from './getTodosByProject';
import currentStates from '../currentStates';
import getTodosByPriority from '../sort/getTodosByPriority';
import incompletedTodos from '../filter/incompletedTodos';
import completedTodos from '../filter/completedTodos';
import activeTodos from '../filter/activeTodos';
import inactiveTodos from '../filter/inactiveTodos';
import database from '../../storage/database';

const getTodoAndUpdateState = tofilter => {
  const todos = database.getItems('todo');
  const arrays = getTodosByProject(tofilter, todos);
  currentStates.currentTodos = arrays;
  currentStates.projectState = tofilter;
  return arrays;
};

const projectTodos = {
  all: {
    oldToNew(tofilter) {
      listToShow(getTodoAndUpdateState(tofilter));
    },
    newToOld(tofilter) {
      listToShow(getTodoAndUpdateState(tofilter).reverse());
    },
    lowestPriority(tofilter) {
      getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(currentStates.currentTodos);
      listToShow(newArrays);
    },
    highestPriority(tofilter) {
      getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(currentStates.currentTodos);
      listToShow(newArrays.reverse());
    },
  },
  incompleteTask: {
    oldToNew(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(incompletedTodos(arrays));
    },
    newToOld(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(incompletedTodos(arrays).reverse());
    },
    lowestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(incompletedTodos(arrays));
      listToShow(newArrays);
    },
    highestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(incompletedTodos(arrays));
      listToShow(newArrays.reverse());
    },
  },
  completedTask: {
    oldToNew(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(completedTodos(arrays));
    },
    newToOld(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(completedTodos(arrays).reverse());
    },
    lowestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(completedTodos(arrays));
      listToShow(newArrays);
    },
    highestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(completedTodos(arrays));
      listToShow(newArrays.reverse());
    },
  },
  activeTask: {
    oldToNew(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(activeTodos(arrays));
    },
    newToOld(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(activeTodos(arrays).reverse());
    },
    lowestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(activeTodos(arrays));
      listToShow(newArrays);
    },
    highestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(activeTodos(arrays));
      listToShow(newArrays.reverse());
    },
  },
  dueTask: {
    oldToNew(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(inactiveTodos(arrays));
    },
    newToOld(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      listToShow(inactiveTodos(arrays).reverse());
    },
    lowestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(inactiveTodos(arrays));
      listToShow(newArrays);
    },
    highestPriority(tofilter) {
      const arrays = getTodoAndUpdateState(tofilter);
      const newArrays = getTodosByPriority(inactiveTodos(arrays));
      listToShow(newArrays.reverse());
    },
  },
};

export default projectTodos;
