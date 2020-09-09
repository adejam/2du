import completedTodos from '../functions/filter/completedTodos';

const todos = [
  {
    description: 'coding javascript',
    dueDate: '2020-09-17T14:39',
    id: 0,
    priority: '5',
    selectProject: 'work',
    status: true,
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
    dueDate: '2020-09-09T14:58',
    id: 2,
    priority: '3',
    selectProject: 'chore',
    status: true,
    title: 'wash plates',
  },
  {
    description: 'play pes or chess',
    dueDate: '2020-09-25T14:59',
    id: 3,
    priority: '2',
    selectProject: 'personal',
    status: true,
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
    description: 'coding javascript',
    dueDate: '2020-09-17T14:39',
    id: 0,
    priority: '5',
    selectProject: 'work',
    status: true,
    title: 'coding',
  },
  {
    description: 'plates in kitchen',
    dueDate: '2020-09-09T14:58',
    id: 2,
    priority: '3',
    selectProject: 'chore',
    status: true,
    title: 'wash plates',
  },
  {
    description: 'play pes or chess',
    dueDate: '2020-09-25T14:59',
    id: 3,
    priority: '2',
    selectProject: 'personal',
    status: true,
    title: 'play game',
  },
];

test('completedTodos function exists', () => {
  expect(completedTodos).toBeDefined();
});

test('return type of completedTodos is a function', () => {
  expect(typeof completedTodos).toBe('function');
});

test('completedTodos filters todos by todos whose task has been completed', () => {
  expect(completedTodos(todos)).toEqual(newTodos);
});
