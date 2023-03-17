import { Box } from '@mui/material';
import ContactForm from '../components/ContactForm';
import BoldHeader3 from '../../../shared/ui/Header/BoldHeader';

export default function ContactFormContainer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: { xs: '80%', sm: '50%' },
        margin: '0 auto',
        mt: 5,
      }}
    >
      <BoldHeader3 text="Contact us" />
      <ContactForm />
    </Box>
  );
}
