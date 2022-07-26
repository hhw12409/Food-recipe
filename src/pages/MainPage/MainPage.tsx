import { fetchRecipe } from '../../api';
import { useQuery } from '@tanstack/react-query';

const MainPage = () => {
  const { isLoading, data } = useQuery(['allRecipe'], fetchRecipe);
  console.log(data);
  return <>Hello World</>;
};

export default MainPage;
