import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ImageBox } from '@components/ImageBox/ImageBox';

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
          <ImageBox src={row.ATT_FILE_NO_MAIN} width="100%" />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/detail/${row.INFO_PRO}`}>How to make</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
