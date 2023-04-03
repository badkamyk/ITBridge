import { QuestionType } from '../../store/questionSliceTypes';
import { Box, Typography } from '@mui/material';
import { languageSVGIcons } from '../../../shared/utils/languageSVGIcons';

export default function QuestionCard(question: QuestionType) {
  return (
    <Box
      data-testid="QuestionCard"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 5,
      }}
    >
      <Box
        sx={{
          mb: 2,
          mt: 6,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
        }}
      >
        <Box
          data-testid="LanguageIcon"
          component={'svg'}
          sx={{ width: 36, height: 36, borderRadius: '33%' }}
          viewBox="0 0 128 128"
        >
          {languageSVGIcons[question.language]}
        </Box>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mt: { xs: 1, sm: 0 },
            ml: 1,
            bgcolor: 'primary.main',
            color: 'white',
            p: 1,
            borderRadius: 6,
            width: 'fit-content',
          }}
        >
          {question.question}
          <Typography variant="body2" component="span" sx={{ ml: 1, color: 'white', opacity: 0.8 }}>
            {question.date}
          </Typography>
        </Typography>
      </Box>
      <Typography
        variant="body1"
        component="p"
        sx={{
          mb: 2,
          mt: 6,
          bgcolor: question.answer ? 'secondary.main' : 'black',
          color: 'white',
          p: 1,
          borderRadius: 6,
          width: 'fit-content',
          alignSelf: 'flex-end',
          maxWidth: '70%',
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            mt: { xs: 1, sm: 0 },
            ml: 1,
            color: 'white',
            borderRadius: 6,
            width: 'fit-content',
          }}
        >
          {question.answer ? question.answer : 'We will answer this question soon 😊'}
        </Typography>
      </Typography>
    </Box>
  );
}
