import { Box } from '@mui/material';
import LanguagesDescription from '../components/LanguagesDescription';
import Cube from '../components/Cube';

export default function LanguageSectionContainer() {
  return (
    <Box
      data-testid="LanguageSectionContainer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        bgcolor: 'grey.100',
        px: { xs: 2, sm: 12, md: 20, lg: 30 },
        py: { xs: 2, sm: 6 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <LanguagesDescription />
      <Cube />
    </Box>
  );
}
