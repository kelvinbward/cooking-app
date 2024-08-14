import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the app with IngredientForm and IngredientList', () => {
    render(<App />);

    const headingElement = screen.getByText(/Cooking App/i);
    const formElement = screen.getByRole('form');
    const listElement = screen.getByRole('list');

    expect(headingElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});
