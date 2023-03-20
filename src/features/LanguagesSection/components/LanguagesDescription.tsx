import { Box, Typography } from '@mui/material';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import BarChartIcon from '@mui/icons-material/BarChart';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import GoogleIcon from '@mui/icons-material/Google';
import BusinessIcon from '@mui/icons-material/Business';

const languageData = [
  {
    title: 'JavaScript',
    subtitle: 'for all you Front-End Developers',
    icon: <LaptopChromebookIcon sx={{ height: 40, width: 40 }} />,
  },
  {
    title: 'Typescript',
    subtitle: 'for all you Edgy JavaScripters',
    icon: <PrivacyTipIcon sx={{ height: 40, width: 40 }} />,
  },
  {
    title: 'Python',
    subtitle: 'for all you Data Scientists',
    icon: <BarChartIcon sx={{ height: 40, width: 40 }} />,
  },
  {
    title: 'C++',
    subtitle: 'for all you Competitive Programmers',
    icon: <LooksOneIcon sx={{ height: 40, width: 40 }} />,
  },
  {
    title: 'Go',
    subtitle: 'for all you Kool Kidz',
    icon: <GoogleIcon sx={{ height: 40, width: 40 }} />,
  },
  {
    title: 'Java',
    subtitle: 'for all you Enterprise Developers',
    icon: <BusinessIcon sx={{ height: 40, width: 40 }} />,
  },
];

export default function LanguagesDescription() {
  return (
    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, px: 2, pt: 1, bgcolor: 'grey.100' }}>
      <Typography variant={'h4'} sx={{ fontWeight: 500, mt: 4 }}>
        We speak 6 languages
      </Typography>
      <Typography variant={'body2'} sx={{ fontWeight: 400, mb: 3, mt: 2, textAlign: 'left', maxWidth: '35em' }}>
        There&apos;s nothing more frustrating than opening an interview prep book, only to find a bunch of solutions in
        a programming language that you don&apos;t know. That&apos;s why all of our questions come with complete written
        solutions in 9 popular languages.
      </Typography>
      {languageData.map((language) => (
        <Box key={language.title} sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
          <Box sx={{ maxHeight: 80, mr: 1 }}>{language.icon}</Box>
          <Typography sx={{ fontWeight: 'bold' }} color="black">
            {language.title},{' '}
            <Box component={'span'} sx={{ fontWeight: 200, fontSize: '14px' }}>
              {language.subtitle}
            </Box>
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
