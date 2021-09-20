import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'React1',
    content: 'react its nice',
  },
  {
    title: 'React2',
    content: 'react its nice2',
  },
  {
    title: 'React3',
    content: 'react its nice3',
  },
];

export default () => (
  <div>
    <Accordion items={items} />
  </div>
);
