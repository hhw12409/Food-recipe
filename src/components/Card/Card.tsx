import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function BasicCard({ row }: any): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.RCP_NM}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {row.RCP_PAT2}
        </Typography>
        <Typography variant="body2">
          준비물:
          {row.RCP_PARTS_DTLS}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/food">Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
