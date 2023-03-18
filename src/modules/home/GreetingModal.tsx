import { Box, Button, Dialog, DialogContent, DialogContentText, Grid, Stack } from '@mui/material';
import { useState } from 'react';

import { useLocales } from '~/hooks';

export function GreetingModal() {
  const { translate } = useLocales();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      maxWidth='md'
    >
      <Grid container spacing={2}>
        <Grid item xs={7} md={6} sm={12}>
          <DialogContent>
            <DialogContentText sx={{ fontSize: 30, fontWeight: 400, mb: 6 }}>
              {translate('greetingModal')}
            </DialogContentText>
            <DialogContentText sx={{ fontSize: 20, fontWeight: 200, mb: 2 }}>
              {translate('sayHello')}
            </DialogContentText>
            <DialogContentText sx={{ fontSize: 20, fontWeight: 200 }}>
              {translate('introduce')}
            </DialogContentText>
            <Stack spacing={2} direction='row' sx={{ mt: 2 }}>
              <Button onClick={handleClose}>{translate('button.getStarted')}</Button>
            </Stack>
          </DialogContent>
        </Grid>
        <Grid item xs={5} md={6} sm={12} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Box
            sx={{
              m: 4,
              width: '75%',
              height: '80%',
              overflow: 'hidden',
            }}
          >
            <img src='/assets/images/working-desk.png' height='100%' width='100%' />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
}
