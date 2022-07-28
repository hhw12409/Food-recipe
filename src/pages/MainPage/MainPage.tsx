import { fetchRecipe } from '@apis/api';
import { useQuery } from '@tanstack/react-query';
import Header from '@components/Header/Header';
import BasicCard from '@components/Card/Card';
import FlexBox from '@components/FlexBox/FlexBox';
import Container from '@components/Container/Container';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { recipeState } from '@/atoms/atoms';

const MainPage = () => {
  const { isLoading, data } = useQuery<IRecipe>(['allRecipe'], fetchRecipe);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Header />
          <FlexBox flexWrap="wrap" justifyContent="space-between" gap="30px" marginBottom="40px">
            {data?.COOKRCP01.row.map((recipe, index) => (
              <BasicCard row={recipe} key={index} />
            ))}
          </FlexBox>
          <Outlet />
        </Container>
      )}
    </>
  );
};

export default MainPage;
