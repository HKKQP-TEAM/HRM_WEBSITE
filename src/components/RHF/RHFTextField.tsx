import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { useLocales } from '~/hooks';

// ----------------------------------------------------------------------

type RHFTextFieldProps = TextFieldProps & {
  name: string;
  label?: string;
};

export default function RHFTextField({ name, label, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();
  const { translate } = useLocales();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          error={!!error}
          helperText={translate(error?.message)}
          {...other}
        />
      )}
    />
  );
}
