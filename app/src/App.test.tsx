import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './store/store';

// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <Provider store={appStore}>
                <App />
            </Provider>
        </MemoryRouter>
    );
});