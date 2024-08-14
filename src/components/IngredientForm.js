import React, { useState } from 'react';

function IngredientForm({ handleAddIngredient }) {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientQuantity, setIngredientQuantity] = useState('');
  const [ingredientCategory, setIngredientCategory] = useState('');

  const categories = ['Pantry', 'Refrigerator', 'Freezer', 'Other'];

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIngredient = {
      name: ingredientName,
      quantity: ingredientQuantity,
      category: ingredientCategory,
    };
    console.log(newIngredient); // For debugging
    handleAddIngredient(newIngredient);
    setIngredientName('');
    setIngredientQuantity('');
    setIngredientCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... other input fields ... */}

      <label htmlFor="category">Category:</label>
      <select id="category" value={ingredientCategory} onChange={(e) => setIngredientCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add Ingredient</button>
    </form>
  );
}

export default IngredientForm;
