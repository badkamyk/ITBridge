import Box from '@mui/material/Box';

export default function MainContentCardContainer({ children }: React.PropsWithChildren) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>{children}</Box>
  );
}
