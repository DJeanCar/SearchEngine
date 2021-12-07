import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import ListItems from '../ListItems';

afterEach(cleanup);

const initialState = {
  search: {
    results: []
  }
};

const reducer = (state = initialState) => state;

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>)
    }
};

test("render with redux", () => {
  const { getByTestId } = renderWithRedux(<ListItems />);
  expect(getByTestId('search-items')).toHaveTextContent('');
});

test('render with initial state', () => {
  const { getAllByTestId } = renderWithRedux(<ListItems />, {
    initialState: {
      search: {
        results: [
          {
            id: '1',
            title: 'xxxx',
            snippet: 'aaaa'
          },
          {
            id: '2',
            title: 'yyyy',
            snippet: 'bbbb'
          },
        ]
      }
    }
  });

  expect(getAllByTestId('item').length).toBe(2);
});
