import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AdbIcon from '@mui/icons-material/Adb';

const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const socialLinks = [
  { title: 'Facebook', href: 'https://www.facebook.com/itbridge.io/' },
  { title: 'Twitter', href: 'https://twitter.com/itbridge_io' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/itbridge-io/' },
  { title: 'Instagram', href: 'https://www.instagram.com/itbridge.io/' },
];
export default function Footer() {
  return (
    <BottomNavigation
      component={'footer'}
      sx={{
        background: 'linear-gradient(-90deg,#02203c,#001528)',
        color: 'primary.contrastText',
        mt: 3,
        py: 4,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/*<Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>*/}
      {/*  {footerLinks.map((link) => (*/}
      {/*    <Link*/}
      {/*      key={link.title}*/}
      {/*      href={link.href}*/}
      {/*      underline="none"*/}
      {/*      sx={{ color: 'primary.contrastText', mx: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }}*/}
      {/*    >*/}
      {/*      {link.title}*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {/*</Box>*/}
      <Box>
        {socialLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            underline="none"
            sx={{ color: 'primary.contrastText', mx: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }}
          >
            <AdbIcon />
          </Link>
        ))}
      </Box>
      <Typography variant={'body2'} align={'center'} sx={{ width: '100%', flexGrow: 1 }}>
        ITBRIDGE © 2023
      </Typography>
    </BottomNavigation>
  );
}
