import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MentorCard({ url, name, description }: { url: string; name: string; description: string }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 1, m: 1 }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
          component="img"
          height="240"
          image={url}
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
      </CardActionArea>
    </Card>
  );
}
