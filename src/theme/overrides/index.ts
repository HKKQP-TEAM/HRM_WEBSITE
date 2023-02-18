import { Theme } from '@mui/material';

import Button from './Button';

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(Button(theme));
}
