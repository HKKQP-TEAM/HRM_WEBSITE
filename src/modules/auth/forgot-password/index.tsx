import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { RHFTextField } from '~/components/RHF';
import FormProvider from '~/components/RHF/FormProvider';
import { useLocales } from '~/hooks';

const ForgotPasswordForm: FC = () => {
  const { translate } = useLocales();

  interface Login {
    username: string;
    password: string;
    remember: boolean;
  }

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .required(translate('Username is required'))
      .max(100, translate('Username too long!')),
    password: Yup.string()
      .required(translate('Password is required'))
      .min(8, translate('Password must be more than 8 characters')),
  });

  const defaultValues: Login = {
    username: '',
    password: '',
    remember: false,
  };

  const methods = useForm<Login>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);
  const { handleSubmit } = methods;
  return (
    <Box sx={{ backgroundImage: 'linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%);' }}>
      <Container
        maxWidth='md'
        fixed
        sx={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh', display: 'flex' }}
      >
        <Grid
          container
          sx={{
            py: '20%',
            px: '10%',
            borderRadius: 2,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            backgroundColor: 'white',
          }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ p: 0 }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack direction='row' alignItems='center' sx={{ mb: 4 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant='h3' gutterBottom color={'#5151E5'}>
                    {translate('Forgot Password')}
                  </Typography>
                </Box>
              </Stack>
              <Stack spacing={3}>
                <RHFTextField name='email' label={translate('Email')} />
              </Stack>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{ my: 6 }}
              >
                <Typography variant='subtitle1'>{translate('Submit')}</Typography>
              </LoadingButton>
            </FormProvider>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' }, pl: 4 }}>
            <Box
              style={{
                backgroundImage: `url(${window.location.origin}/assets/images/Introducing-3.png)`,
                height: '90%',
                width: '90%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForgotPasswordForm;
