import getItemToSearch from '../functions/search/getItemToSearch';

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

const searchC = [
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
    description: 'learn react',
    dueDate: '2020-09-15T15:00',
    id: 4,
    priority: '4',
    selectProject: 'work',
    status: false,
    title: 'react',
  },
];

const searchWa = [
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
];

test('getItemToSearch function exists', () => {
  expect(getItemToSearch).toBeDefined();
});

test('return type of getItemToSearch is a function', () => {
  expect(typeof getItemToSearch).toBe('function');
});

test('getItemToSearch searches todo which title contains the letter "c"', () => {
  expect(getItemToSearch('c', todos)).toEqual(searchC);
});

test('getItemToSearch seatches todo which contains the letter "wa"', () => {
  expect(getItemToSearch('WA', todos)).toEqual(searchWa);
});
