import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// export default function MentorCard({url, name, description}: {url: string, name: string, description: string}) {
export default function MentorCard() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 1, m: 1 }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
          component="img"
          height="240"
          image="https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
