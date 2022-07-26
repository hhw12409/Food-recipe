import api from './data/api.json';

const APP_ID = api.APP_ID;
const APP_KEY = api.APP_KEy;
const BASE_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&diet=balanced`;

export const fetchRecipe = async () => {
  const response = await fetch(`${BASE_URL}`);
  return await response.json();
};
