import BoldHeader from '../../../shared/ui/Header/BoldHeader';
import { Box, Container, Grid } from '@mui/material';
import QuestionCard from '../components/QuestionCard';
import { useAppSelector } from '../../store/hooks';
import { selectMemoizedQuestions } from '../../store/selectors';
import BackgroundSVG from '../../MainContentCard/components/BackgroundSVG';

export default function QuestionsContainer() {
  const questions = useAppSelector(selectMemoizedQuestions);

  return (
    <Container maxWidth="lg">
      <BoldHeader variant={'h4'} text={'Your recently asked questions'} />
      <Grid container>
        <BackgroundSVG />
        {questions.map((question) => (
          <Grid item xs={12} key={question.id}>
            <QuestionCard {...question} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          position: 'relative',
          bottom: '0',
          right: '0',
          width: '100%',
          height: '100%',
          zIndex: '-10',
          overflow: 'hidden',
        }}
      >
        <Box
          component="svg"
          viewBox="0 0 1420 420"
          preserveAspectRatio="none"
          sx={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-10' }}
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            d="M-400,400.98 C500.00,250.00 349.20,-49.98 501.55,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: 'url(#sw-gradient-0)' }}
          />
        </Box>
      </Box>
    </Container>
  );
}
