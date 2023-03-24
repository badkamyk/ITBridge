import { Typography } from '@mui/material';

export default function BoldHeader({
  variant,
  text,
  component = 'h1',
}: {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}) {
  return (
    <Typography variant={variant} component={component} sx={{ fontWeight: 500, mb: 2, mt: 6, textAlign: 'center' }}>
      {text}
    </Typography>
  );
}
