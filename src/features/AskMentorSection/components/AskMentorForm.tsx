import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { askMentorFormSchema, AskMentorFormSchemaType } from './AskMentorFormSchema';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function AskMentorForm() {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AskMentorFormSchemaType>({
    resolver: zodResolver(askMentorFormSchema),
    defaultValues: {
      question: '',
    },
  });

  const handleSubmitForm = () => {
    console.log('submit');
    reset({
      question: '',
    });
  };
  console.log(watch('question'));

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
