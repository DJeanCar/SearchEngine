import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Item from './Item';

const ListItems = ({ results }) => {
  return (
    <Container data-testid='search-items'>
      {results.map(result => (
        <Item key={result.cacheId || result.id} result={result} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 50%;
`;

export default connect(
  state => ({
    results: state.search.results
  })
)(ListItems);
