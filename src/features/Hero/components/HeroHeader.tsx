import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function HeroHeader() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pt: 3,
        pb: 2,
        px: { xs: 1, sm: 3, md: 4, lg: 8, xl: 9 },
        background: 'linear-gradient(-90deg,#02203c,#001528)',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'center',
      }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ mt: 5, fontWeight: 700, color: 'primary.contrastText' }}
        >
          Begin your <br />
          <Box component="span" sx={{ color: 'primary.main' }}>
            IT
          </Box>{' '}
          journey
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 400, color: 'primary.contrastText' }}>
          Get into the latest news and chat with our mentors who will answer all your questions
        </Typography>
        <Box sx={{ display: { xs: 'flex', sm: 'block' }, alignItems: 'center', mt: 2 }}>
          <Button variant="contained" size="large" sx={{ mt: 2, mr: 2, borderRadius: 2 }}>
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ mt: 2, color: 'primary.contrastText', borderColor: 'primary.contrastText', borderRadius: 2 }}
          >
            Learn More
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
        <Box
          component="img"
          src="./undraw_programming.svg"
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
