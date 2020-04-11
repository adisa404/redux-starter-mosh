/*
We have a recipe object as follows: 
recipe = 
{ 
  name: “Spaghetti Bolognese”, 
  ingredients: [“egg”, “salt”] 
} 
Assuming that this object is immutable, write code to  
-Add a new ingredient (“cream”) 
-Replace “egg” with “egg white” 
-Remove an ingredient (“egg”)
*/

const recipe = {
  name: 'Spaghetti Bolognese',
  ingredients: ['egg', 'salt'],
};

const newIngRecipe = {
  ...recipe,
  ingredients: [...recipe.ingredients, 'cream'],
};
console.log('newIngRecipe', newIngRecipe);

const recipeWithRemovedEgg = {
  ...newIngRecipe,
  ingredients: [...newIngRecipe.ingredients.filter((ing) => ing !== 'egg')],
};

console.log('recipeWithRemovedEgg', recipeWithRemovedEgg);
