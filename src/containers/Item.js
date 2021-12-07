import React from 'react';
import styled from 'styled-components';

const Item = ({ result }) => {

  const handleClick = () => {
    const { link } = result;
    window.open(link, '_blank');
  }

  return (
    <Result key={result.cacheId} onClick={handleClick}>
      <div>a{result.title}</div>
      <div>{result.snippet}</div>
    </Result>
  );
};

const Result = styled.div`
  background: #585656;
  margin: 20px 0;
  padding: 15px;
  cursor: pointer;
`;

export default Item;
