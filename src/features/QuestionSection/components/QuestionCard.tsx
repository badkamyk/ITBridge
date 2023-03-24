import { QuestionType } from '../../store/questionSliceTypes';
import { Box, Typography } from '@mui/material';

export default function QuestionCard(question: QuestionType) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 5,
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{
          mb: 2,
          mt: 6,
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
        {question.answer ? question.answer : 'We will answer this question soon 😊'}
      </Typography>
    </Box>
  );
}
