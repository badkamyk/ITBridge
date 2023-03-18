import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchemaType, formSchema } from './FormSchema';
import FormModal from './FormModal';

export default function ContactForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      email: '',
      message: '',
    },
  });
  const [isModal, setIsModal] = useState(false);
  const onSubmit = () => {
    emailjs.sendForm('service_id', 'template_id', formRef.current as string | HTMLFormElement, 'key_id').then(
      (result: { text: string }) => {
        console.log(result.text);
      },
      (error: { text: string }) => {
        console.log(error.text);
      }
    );

    reset({
      subject: '',
      email: '',
      message: '',
    });
    setIsModal(true);
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Box
      ref={formRef}
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}
    >
      <Controller
        name={'subject'}
        control={control}
        rules={{ required: true }}
        render={({ field: { name, value, onChange } }) => (
          <TextField
            label="Subject"
            variant="outlined"
            value={value}
            error={!!errors.message}
            helperText={errors.subject?.message}
            onChange={onChange}
            name={name}
          />
        )}
      />
      <Controller
        name={'email'}
        control={control}
        rules={{ required: true }}
        render={({ field: { name, value, onChange } }) => (
          <TextField
            label="Email"
            variant="outlined"
            value={value}
            error={!!errors.message}
            helperText={errors.email?.message}
            onChange={onChange}
            name={name}
          />
        )}
      />
      <Controller
        name={'message'}
        control={control}
        rules={{ required: true }}
        render={({ field: { name, value, onChange } }) => (
          <TextField
            label="Message"
            variant="outlined"
            error={!!errors.message}
            helperText={errors.message?.message}
            value={value}
            onChange={onChange}
            name={name}
            multiline={true}
            rows={4}
          />
        )}
      />
      <Button variant="contained" type={'submit'} sx={{ width: '30%' }} disabled={isSubmitting}>
        Submit
      </Button>
      <FormModal isModal={isModal} setIsModal={setIsModal} />
    </Box>
  );
}
