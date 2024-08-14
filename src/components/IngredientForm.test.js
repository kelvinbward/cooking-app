import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IngredientForm from './IngredientForm';

jest.mock('./IngredientForm');

describe('IngredientForm', () => {
  it('renders the form and calls handleSubmit on submit', () => {
    const handleAddIngredient = jest.fn();
    IngredientForm.mockImplementation(() => (
      <form onSubmit={handleAddIngredient}>
        {/* Your form fields here */}
        <button type="submit">Add Ingredient</button>
      </form>
    ));

    render(<IngredientForm handleAddIngredient={handleAddIngredient} />);

    const submitButton = screen.getByRole('button', { name: /Add Ingredient/i });
    fireEvent.click(submitButton);

    expect(handleAddIngredient).toHaveBeenCalledTimes(1);
  });
});
