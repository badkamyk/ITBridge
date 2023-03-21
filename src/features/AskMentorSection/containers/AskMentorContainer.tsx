import { Container } from '@mui/material';
import BoldHeader from '../../../shared/ui/Header/BoldHeader';
import AskMentorForm from '../components/AskMentorForm';
import ChooseLanguageContainer from './ChooseLanguageContainer';

export default function AskMentorContainer() {
  return (
    <Container maxWidth="lg">
      <BoldHeader variant={'h4'} text={'Choose language '} />
      <ChooseLanguageContainer />
      <AskMentorForm />
    </Container>
  );
}
