import { Container } from '@mui/material';
import BoldHeader from '../../../shared/ui/Header/BoldHeader';
import FormContainer from './FormContainer';

export default function AskMentorContainer() {
  return (
    <Container maxWidth="lg">
      <BoldHeader variant={'h4'} text={'Choose language '} />
      <FormContainer />
    </Container>
  );
}
