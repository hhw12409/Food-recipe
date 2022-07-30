import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import Header from '@components/Header/Header';
import { ImageBox } from '@components/ImageBox/ImageBox';
import FlexBox from '@components/FlexBox/FlexBox';
import { Helmet } from 'react-helmet';

export default function FoodCard({ data }: any): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{data[0].RCP_NM ? data[0].RCP_NM : 'Loading...'}</title>
      </Helmet>
      <FlexBox alignItems="center" justifyContent="center" width="100%">
        <Header title={data[0].RCP_NM} marginRight="10px" />
        <ImageBox src={data[0].ATT_FILE_NO_MK} width="3%" style={{ borderRadius: '50%' }} />
      </FlexBox>
      <Card sx={{ minWidth: 275 }} style={{ marginTop: '30px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data[0].RCP_NM}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data[0].RCP_PARTS_DTLS}
          </Typography>
          <Typography variant="body2">{data[0]?.MANUAL01}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL02}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL03}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL04}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL05}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL06}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL07}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL08}</Typography>
          <Typography variant="body2">{data[0]?.MANUAL09}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(-1)}>
            Go to Main Page
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
