import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import Item from './Item';

const ListItems = () => {
  const { results } = useSelector((state) => {
    const { search } = state;
    return search;
  });

  return (
    <Container>
      {results.map(result => (
        <Item result={result} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 50%;
`;

export default ListItems;
