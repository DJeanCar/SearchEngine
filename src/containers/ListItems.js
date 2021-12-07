import React from 'react';

import { useSelector } from 'react-redux';
import Item from './Item';

const ListItems = () => {
  const { results } = useSelector((state) => {
    const { search } = state;
    return search;
  });

  console.log('>>result', results)
  return (
    <div>
      {results.map(result => (
        <Item result={result} />
      ))}
    </div>
  );
};

export default ListItems;
