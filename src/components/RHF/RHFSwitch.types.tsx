// form
// @mui
import { alpha, FormControlLabel, styled,Switch } from '@mui/material';
import { Controller,useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

interface RHFSwitchProps {
  name: string;

  [key: string]: any;
}

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#5151E5',
    '&:hover': {
      backgroundColor: alpha('#5151E5', theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#5151E5',
  },
}));

export default function RHFSwitch({ name, ...other }: RHFSwitchProps) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label=''
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <CustomSwitch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}
