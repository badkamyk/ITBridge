import { Box, Button, Link, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'grey.100',
        px: 3,
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" sx={{ maxWidth: '30em', textAlign: 'center', mb: 2 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link href="/">
        <Button variant="contained" color="primary">
          Go to home
        </Button>
      </Link>
    </Box>
  );
}
