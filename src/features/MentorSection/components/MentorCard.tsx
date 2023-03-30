import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function MentorCard({
  imgSrc,
  name,
  description,
}: {
  imgSrc: string;
  name: string;
  description: string;
}) {
  return (
    <Card
      sx={{ minWidth: 145, borderRadius: 2, boxShadow: 1, m: 1, minHeight: { xs: 350, sm: 400, md: 450, lg: 400 } }}
    >
      <Box data-testid="MentorCard">
        <CardMedia
          sx={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
          component="img"
          height="240"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
