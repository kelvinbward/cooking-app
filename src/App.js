import React, { useState } from 'react';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const handleEditIngredient = (index, updatedIngredient) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = updatedIngredient;
    setIngredients(newIngredients);
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  return (
    <div>
      <h1>Cooking App</h1>
      <IngredientForm handleAddIngredient={handleAddIngredient} />
      <IngredientList
        ingredients={ingredients}
        onEdit={handleEditIngredient}
        onDelete={handleDeleteIngredient}
      />
    </div>
  );
}

export default App;
