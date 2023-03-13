import { TextField } from '@mui/material';
import { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useLocales } from '~/hooks';

// ----------------------------------------------------------------------

interface RHFSelectProps {
  name: string;
  children: ReactNode;
}

export default function RHFSelect({ name, children, ...other }: RHFSelectProps) {
  const { control } = useFormContext();
  const { translate } = useLocales();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={translate(error?.message)}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
