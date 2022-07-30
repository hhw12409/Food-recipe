import { fetchRecipe } from '@apis/api';
import { useQuery } from '@tanstack/react-query';
import Header from '@components/Header/Header';
import Card from '@components/Card/Card';
import FlexBox from '@components/FlexBox/FlexBox';
import Container from '@components/Container/Container';

const MainPage = () => {
  const { isLoading, data } = useQuery<IRecipe>(['allRecipe'], fetchRecipe);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Header title="냠냠 맛있는 한식 레시피" />
          <FlexBox flexWrap="wrap" justifyContent="space-between" gap="30px" marginBottom="40px">
            {data?.COOKRCP01.row.map((recipe, index) => (
              <Card row={recipe} key={index} />
            ))}
          </FlexBox>
        </Container>
      )}
    </>
  );
};

export default MainPage;
