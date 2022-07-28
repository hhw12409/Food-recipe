import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipe } from '@apis/api';

export default function FoodCard(): JSX.Element {
  const { isLoading, data } = useQuery<IRecipe>(['allRecipe'], fetchRecipe);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          test
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          tets
        </Typography>
        <Typography variant="body2">준비물: test</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/food">Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
