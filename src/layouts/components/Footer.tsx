import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const socialLinks = [
  { title: 'Facebook', href: 'https://www.facebook.com/itbridge.io/', icon: <FacebookIcon /> },
  { title: 'Twitter', href: 'https://twitter.com/itbridge_io', icon: <TwitterIcon /> },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/itbridge-io/', icon: <LinkedInIcon /> },
  { title: 'Instagram', href: 'https://www.instagram.com/itbridge.io/', icon: <InstagramIcon /> },
];
export default function Footer() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(-90deg,#02203c,#001528)',
        color: 'primary.contrastText',
        py: 1,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BottomNavigation
        component={'footer'}
        sx={{
          bgcolor: 'transparent',
        }}
      >
        {socialLinks.map((link) => (
          <BottomNavigationAction
            key={link.title}
            href={link.href}
            target="_blank"
            icon={link.icon}
            sx={{
              color: 'primary.contrastText',
              fontSize: { xs: '0.8rem', sm: '1rem' },
              '&:hover': { color: 'primary.main' },
            }}
          ></BottomNavigationAction>
        ))}
      </BottomNavigation>
      <Typography variant={'body2'} align={'center'} sx={{ flexGrow: 1 }}>
        ITBRIDGE © 2023
      </Typography>
    </Box>
  );
}
