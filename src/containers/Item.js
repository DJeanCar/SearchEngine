import React from 'react';
import styled from 'styled-components';

const Item = ({ result }) => {

  const handleClick = () => {
    const { link, url } = result;
    
    window.open(link || url, '_blank');
  }

  return (
    <Result onClick={handleClick} data-testid='item'>
      <Title>{result.title || result.name}</Title>
      <div>{result.snippet}</div>
    </Result>
  );
};

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Result = styled.div`
  background: #585656;
  margin: 20px 0;
  padding: 15px;
  cursor: pointer;
  text-align: left;
`;

export default Item;
