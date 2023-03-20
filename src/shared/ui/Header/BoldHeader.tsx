import { Typography } from '@mui/material';

export default function BoldHeader({
  variant,
  text,
}: {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}) {
  return (
    <Typography variant={variant} sx={{ fontWeight: 500, mb: 2, mt: 6, textAlign: 'center' }}>
      {text}
    </Typography>
  );
}
