import getTodosByPriority from '../functions/sort/getTodosByPriority';

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

const newTodos = [
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
    description: 'learn react',
    dueDate: '2020-09-15T15:00',
    id: 4,
    priority: '4',
    selectProject: 'work',
    status: false,
    title: 'react',
  },
  {
    description: 'coding javascript',
    dueDate: '2020-09-17T14:39',
    id: 0,
    priority: '5',
    selectProject: 'work',
    status: false,
    title: 'coding',
  },
];

test('getTodosByPriority function exists', () => {
  expect(getTodosByPriority).toBeDefined();
});

test('return type of getTodosByPriority is an function', () => {
  expect(typeof getTodosByPriority).toBe('function');
});

test('getTodosByPriority sorts todos to newTodos', () => {
  expect(getTodosByPriority(todos)).toEqual(newTodos);
});
