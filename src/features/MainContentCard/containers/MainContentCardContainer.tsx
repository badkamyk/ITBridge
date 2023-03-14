import Box from '@mui/material/Box';

export default function MainContentCardContainer({ children }: React.PropsWithChildren) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        pt: { xs: 2, sm: 8 },
      }}
    >
      {children}
    </Box>
  );
}
