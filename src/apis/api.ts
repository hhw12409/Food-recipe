const BASE_URL = 'http://openapi.foodsafetykorea.go.kr/api/sample/COOKRCP01/json/1/5';

export const fetchRecipe = async () => {
  const response = await fetch(`${BASE_URL}`);
  return await response.json();
};
