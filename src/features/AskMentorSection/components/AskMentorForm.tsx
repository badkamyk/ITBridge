import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { askMentorFormSchema, AskMentorFormSchemaType } from './AskMentorFormSchema';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '../../store/hooks';
import { addQuestion } from '../../store/questionSlice';
import { LanguageType } from '../../store/questionSliceTypes';

export default function AskMentorForm({ chosenLanguage }: { chosenLanguage: LanguageType }) {
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<AskMentorFormSchemaType>({
    resolver: zodResolver(askMentorFormSchema),
    defaultValues: {
      question: '',
    },
  });

  const dispatch = useAppDispatch();

  const handleSubmitForm = () => {
    dispatch(addQuestion({ ...getValues(), language: chosenLanguage }));
    reset({
      question: '',
    });
  };

  return (
    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(handleSubmitForm)}>
      <Controller
        name={'question'}
        control={control}
        rules={{ required: true }}
        render={({ field: { name, value, onChange, onBlur } }) => (
          <TextField
            multiline
            minRows={4}
            maxRows={4}
            fullWidth
            label="Question"
            variant="outlined"
            error={!!errors.question}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.question?.message}
            value={value}
            name={name}
          />
        )}
      />
      <Button
        variant="contained"
        type={'submit'}
        sx={{ width: { xs: '100%', sm: '30%' }, my: 2 }}
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </Box>
  );
}
