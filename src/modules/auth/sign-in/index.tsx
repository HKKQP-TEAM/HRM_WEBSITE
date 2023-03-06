import { LoadingButton } from '@mui/lab';
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Iconify from '~/components/iconify';

const SignInForm: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <Container maxWidth='md'>
      <Stack direction='row' alignItems='center' sx={{ mb: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h4' gutterBottom>
            Sign In
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={3}>
        <TextField name='email' label='email' />

        <TextField
          name='password'
          label='Password'
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

      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ my: 2 }}>
        <Link component={RouterLink} variant='subtitle2' to='/forgot-password'>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size='large' type='submit' variant='contained'>
        Sign In
      </LoadingButton>
    </Container>
  );
};

export default SignInForm;
