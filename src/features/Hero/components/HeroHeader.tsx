import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';

export default function HeroHeader() {
  return (
    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 6 }, flexDirection: { xs: 'column', sm: 'row' } }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Begin your <br />
          <Box component="span" sx={{ color: 'primary.main' }}>
            IT
          </Box>{' '}
          journey
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 400 }}>
          Get into the latest news and chat with our mentors who will answer all your questions
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2, mr: 2 }}>
          Get Started
        </Button>
        <Button variant="outlined" size="large" sx={{ mt: 2 }}>
          Learn More
        </Button>
        <Box sx={{ display: 'flex', mt: 4, gap: 3 }}>
          <Chip label="React" sx={{ mt: 2, p: 3, bgcolor: 'info.main', color: 'info.contrastText' }} />
          <Chip label="Angular" sx={{ mt: 2, p: 3, bgcolor: 'info.main', color: 'info.contrastText' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="hero"
          sx={{
            width: { xs: '100%', sm: '80%' },
            transform: {
              xs: 'none',
              sm: 'rotate3d(.5,-.866,0,15deg) rotate(-1deg)',
              boxShadow: 3,
              borderRadius: 3,
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
