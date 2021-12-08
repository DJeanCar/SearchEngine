import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FormFields from '../FormFields'

afterEach(cleanup);

const initialState = {
    search: {
      results: [],
      loading: false,
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
  

test('render component', () => {
    const { getByTestId } = renderWithRedux(<FormFields />);

    expect(getByTestId('search-box')).toBeTruthy();
    expect(getByTestId('search-button')).toBeTruthy();
    expect(getByTestId('engine-dropdown')).toBeTruthy();
});

test('Search button be disabled if engine dropdown and search box is empty', () => {
    const { getByTestId } = renderWithRedux(<FormFields />);

    expect(getByTestId('search-button')).toBeDisabled();
});
