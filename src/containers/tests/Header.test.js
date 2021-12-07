import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Header from '../Header';

afterEach(cleanup);

test('render content', () => {
    const component = render(<Header />);
    component.getByText('Synack Test')
});
