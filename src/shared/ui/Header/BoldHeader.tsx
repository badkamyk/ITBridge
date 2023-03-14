import { Typography } from '@mui/material';

export default function BoldHeader3({ text }: { text: string }) {
  return (
    <Typography variant="h3" sx={{ fontWeight: 500, mb: 2, mt: 6, textAlign: 'center' }}>
      {text}
    </Typography>
  );
}
