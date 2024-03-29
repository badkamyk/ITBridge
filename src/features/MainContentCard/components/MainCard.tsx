import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MainCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <Box
      sx={{
        minWidth: 275,
        overflow: 'hidden',
        borderRadius: 1,
        boxShadow: 1,
        m: 1,
      }}
    >
      <Card
        data-testid="MainCard"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          '&:hover': {
            bgcolor: 'grey.100',
            boxShadow: 3,
            cursor: 'pointer',
            maxHeight: 300,
            transition: 'all 0.2s ease-in-out',
            '& .card-svg': {
              transform: 'scale(1.2)',
            },
          },
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ maxHeight: 50, mb: 1.5 }}>{icon}</Box>
          <Typography sx={{ mb: 1.5, fontWeight: 'bold' }} color="black" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 200, textAlign: 'center' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Link to="/ask-mentor" style={{ textDecoration: 'none' }}>
            <Button size="small" sx={{ borderRadius: 2 }}>
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
