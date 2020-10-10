import getTodosByProject from '../functions/project/getTodosByProject';

const todos = [
  {
    description: 'coding javascript',
    dueDate: '2020-09-17T14:39',
    id: 0,
    priority: '5',
    selectProject: 'work',
    status: false,
    title: 'coding',
  },
  {
    description: 'project power',
    dueDate: '2020-09-08T14:58',
    id: 1,
    priority: '1',
    selectProject: 'personal',
    status: false,
    title: 'watching film',
  },
  {
    description: 'plates in kitchen',
    dueDate: '2020-09-10T14:58',
    id: 2,
    priority: '3',
    selectProject: 'chore',
    status: false,
    title: 'wash plates',
  },
  {
    description: 'play pes or chess',
    dueDate: '2020-09-25T14:59',
    id: 3,
    priority: '2',
    selectProject: 'personal',
    status: false,
    title: 'play game',
  },
  {
    description: 'learn react',
    dueDate: '2020-09-15T15:00',
    id: 4,
    priority: '4',
    selectProject: 'work',
    status: false,
    title: 'react',
  },
];

const allTodos = todos;

const personalTodos = [
  {
    description: 'project power',
    dueDate: '2020-09-08T14:58',
    id: 1,
    priority: '1',
    selectProject: 'personal',
    status: false,
    title: 'watching film',
  },
  {
    description: 'play pes or chess',
    dueDate: '2020-09-25T14:59',
    id: 3,
    priority: '2',
    selectProject: 'personal',
    status: false,
    title: 'play game',
  },
];

const choreTodos = [
  {
    description: 'plates in kitchen',
    dueDate: '2020-09-10T14:58',
    id: 2,
    priority: '3',
    selectProject: 'chore',
    status: false,
    title: 'wash plates',
  },
];

const workTodos = [
  {
    description: 'coding javascript',
    dueDate: '2020-09-17T14:39',
    id: 0,
    priority: '5',
    selectProject: 'work',
    status: false,
    title: 'coding',
  },
  {
    description: 'learn react',
    dueDate: '2020-09-15T15:00',
    id: 4,
    priority: '4',
    selectProject: 'work',
    status: false,
    title: 'react',
  },
];

test('getTodosByProject function exists', () => {
  expect(getTodosByProject).toBeDefined();
});

test('return type of getTodosByProject is a function', () => {
  expect(typeof getTodosByProject).toBe('function');
});

test('getTodosByProject filters todos by projects to allTodos', () => {
  expect(getTodosByProject('all', todos)).toEqual(allTodos);
});

test('getTodosByProject filters todos by projects to personalTodos', () => {
  expect(getTodosByProject('personal', todos)).toEqual(personalTodos);
});

test('getTodosByProject filters todos by projects to choreTodos', () => {
  expect(getTodosByProject('chore', todos)).toEqual(choreTodos);
});

test('getTodosByProject filters todos by projects to workTodos', () => {
  expect(getTodosByProject('work', todos)).toEqual(workTodos);
});
