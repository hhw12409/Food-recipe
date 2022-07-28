import { atom } from 'recoil';

export const recipeState = atom<IRowReuslt[]>({
  key: 'recipe',
  default: [],
});
