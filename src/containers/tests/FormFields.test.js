import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import FormFields from '../FormFields'

afterEach(cleanup);

test('render component', () => {
    const { getByTestId } = render(<FormFields />);

    expect(getByTestId('search-box')).toBeTruthy();
    expect(getByTestId('search-button')).toBeTruthy();
    expect(getByTestId('engine-dropdown')).toBeTruthy();
});

test('Search button be disabled if engine dropdown and search box is empty', () => {
    const { getByTestId } = render(<FormFields />);

    expect(getByTestId('search-button')).toBeDisabled();
});
