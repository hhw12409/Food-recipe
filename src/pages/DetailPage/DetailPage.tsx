import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipe } from '@apis/api';
import FoodCard from '@components/FoodCard/FoodCard';

const DetailPage = () => {
  const { isLoading, data } = useQuery<IRecipe>(['allRecipe'], fetchRecipe);
  const { id } = useParams<string>();

  const result = data?.COOKRCP01.row.filter((data) => String(data.INFO_PRO) === id);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <FoodCard data={result} />
        </>
      )}
    </>
  );
};

export default DetailPage;
