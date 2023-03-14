import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const socialLinks = [
  { title: 'Facebook', href: 'https://www.facebook.com/itbridge.io/', icon: <FacebookIcon /> },
  { title: 'Twitter', href: 'https://twitter.com/itbridge_io', icon: <TwitterIcon /> },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/itbridge-io/', icon: <LinkedInIcon /> },
  { title: 'Instagram', href: 'https://www.instagram.com/itbridge.io/', icon: <InstagramIcon /> },
];
export default function Footer() {
  return (
    <BottomNavigation
      component={'footer'}
      sx={{
        background: 'linear-gradient(-90deg,#02203c,#001528)',
        color: 'primary.contrastText',
        mt: 3,
        py: 5,
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
      <Box sx={{ mb: 2 }}>
        {socialLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            underline="none"
            sx={{ color: 'primary.contrastText', mx: 2, fontSize: { xs: '0.8rem', sm: '1rem' } }}
          >
            <Box component="span" sx={{ '&:hover': { color: 'primary.main' } }}>
              {link.icon}
            </Box>
          </Link>
        ))}
      </Box>
      <Typography variant={'body2'} align={'center'} sx={{ flexGrow: 1 }}>
        ITBRIDGE © 2023
      </Typography>
    </BottomNavigation>
  );
}
