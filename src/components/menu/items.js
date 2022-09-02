import { nanoid } from 'nanoid';

export const items = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movies',
  },
];
