import { Theme } from '@mui/material';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          boxShadow: 'none',
          color: theme.palette.common.white,
        },
        containedSecondary: {
          color: theme.palette.common.black,
        },
        outlined: {
          boxShadow: 'none',
        },
        containedInherit: {
          color: theme.palette.grey[800],
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
      variants: [
        {
          props: { size: 'small' },
          style: {
            height: '32px',
          },
        },
        {
          props: { size: 'medium' },
          style: {
            height: '48px',
          },
        },
        {
          props: { size: 'large' },
          style: {
            height: '56px',
          },
        },
      ],
      defaultProps: {
        variant: 'contained',
      },
    },
  };
}
