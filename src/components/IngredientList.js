import React from 'react';

function IngredientList({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name}>
          {ingredient.name} - {ingredient.quantity} ({ingredient.category})
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;
