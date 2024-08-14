import React, { useState } from 'react';

function IngredientList({ ingredients, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedIngredient, setEditedIngredient] = useState({});

  const handleSaveEdit = (index) => {
    onEdit(index, editedIngredient);
    setIsEditing(null);
    setEditedIngredient({});
  };

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={ingredient.name}>
          {isEditing === index ? (
            <form onSubmit={(e) => handleSaveEdit(index)}>
              <label>Name:</label>
              <input
                type="text"
                value={editedIngredient.name || ingredient.name}
                onChange={(e) =>
                  setEditedIngredient({ ...editedIngredient, name: e.target.value })
                }
              />
              <label>Quantity:</label>
              <input
                type="number"
                value={editedIngredient.quantity || ingredient.quantity}
                onChange={(e) =>
                  setEditedIngredient({ ...editedIngredient, quantity: Number(e.target.value) })
                }
              />
              <label>Category:</label>
              <select
                value={editedIngredient.category || ingredient.category}
                onChange={(e) =>
                  setEditedIngredient({ ...editedIngredient, category: e.target.value })
                }
              >
                {/* Add options for categories */}
              </select>
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              {ingredient.name} - {ingredient.quantity} ({ingredient.category})
              <button onClick={() => setIsEditing(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;
