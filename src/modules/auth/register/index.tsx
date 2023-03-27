import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import Iconify from '~/components/iconify';
import { RHFSelect, RHFTextField } from '~/components/RHF';
import FormProvider from '~/components/RHF/FormProvider';
import { useLocales } from '~/hooks';

const RegisterForm: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const { translate } = useLocales();
  interface Register {
    employeeId: string;
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    role: string;
  }
  const role = [
    {
      value: 'Employee',
      label: 'Employee',
    },
    {
      value: 'Manager',
      label: 'Manager',
    },
    {
      value: 'Admin',
      label: 'Admin',
    },
  ];

  const RegisterSchema = Yup.object().shape({
    employeeId: Yup.string().required(translate('Employee ID is required')),
    username: Yup.string()
      .required(translate('Username is required'))
      .max(100, translate('Username too long!')),
    password: Yup.string()
      .required(translate('Password is required'))
      .min(8, translate('Password must be more than 8 characters')),
    confirmPassword: Yup.string()
      .required(translate('Confirm Password is required'))
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().required(translate('Email is required')),
    role: Yup.string().required(translate('Employee ID is required')),
  });

  const defaultValues: Register = {
    employeeId: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: '',
  };

  const methods = useForm<Register>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<Register> = (data) => console.log(data);
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
            py: '10%',
            px: '5%',
            my: '1.5rem',
            borderRadius: 2,
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
            backgroundColor: 'white',
          }}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ p: 0 }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack direction='row' alignItems='center' sx={{ mb: 3 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant='h3' gutterBottom color={'#5151E5'}>
                    {translate('Register')}
                  </Typography>
                </Box>
              </Stack>
              <Stack spacing={3}>
                <RHFTextField name='employeeId' label={translate('Employee ID')} />
                <RHFTextField name='email' label={translate('Email')} />
                <RHFSelect name='role' label={translate('Role')}>
                  {role.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
                <RHFTextField name='username' label={translate('Username')} />
                <RHFTextField
                  name='password'
                  label={translate('Password')}
                  type={isShowPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setIsShowPassword(!isShowPassword)} edge='end'>
                          <Iconify icon={isShowPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <RHFTextField
                  name='confirmPassword'
                  label={translate('Confirm password')}
                  type={isShowPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={() => setIsShowPassword(!isShowPassword)} edge='end'>
                          <Iconify icon={isShowPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <LoadingButton
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{ mt: '1.5rem', backgroundColor: '#5151E5' }}
              >
                <Typography variant='subtitle1'>{translate('Register')}</Typography>
              </LoadingButton>
              <Stack sx={{ mt: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='body1'>
                  {translate('Back to ')}
                  <Link
                    component={RouterLink}
                    variant='subtitle1'
                    sx={{ color: '#5151E5' }}
                    to='/sign-in'
                  >
                    {translate('Sign In')}
                  </Link>
                </Typography>
              </Stack>
            </FormProvider>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' }, pb: 3 }}>
            <Box
              style={{
                backgroundImage: `url(${window.location.origin}/assets/images/orangescrum-signup-helps.webp)`,
                height: '100%',
                width: '100%',
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

export default RegisterForm;
