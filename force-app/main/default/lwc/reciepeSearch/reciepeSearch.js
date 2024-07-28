import { LightningElement } from 'lwc';
import getRandomRecipe from '@salesforce/apex/IntegraonSpoonacular.getRandomRecipe';
import getRecipeByIngredients from '@salesforce/apex/IntegraonSpoonacular.getRecipeByIngredients';

export default class ReciepeSearch extends LightningElement
{
recipes = [];
fetchRandomRecipe() {
  getRandomRecipe()
    .then((data) => {
      this.recipes =
        JSON.parse(data) && JSON.parse(data).recipes
          ? JSON.parse(data).recipes
          : [];
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchRecipesByIngredients() {
  const ingredients = this.template.querySelector(".ingredient-input").value;
  getRecipeByIngredients({ ingredients })
    .then((data) => {
      this.recipes = JSON.parse(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
}