import React, { useState } from 'react';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  return (
    <div>
      <h1>Cooking App</h1>
      <IngredientForm handleAddIngredient={handleAddIngredient} />
      <IngredientList ingredients={ingredients} />
    </div>
  );
}

export default App;
