import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useForm } from 'react-hook-form';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '480px',
  '& h4': {
    marginBottom: theme.spacing(2),
  },
  '& button': {
    animation: `${bounce} 2s infinite`,
  },
}));

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} component="form" onSubmit={handleSubmit(onSubmit)}>
          <ContactForm elevation={6}>
            <Typography variant={matches ? 'h5' : 'h4'} align="center">
              Contact Me
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              {...register('name', { required: true })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              {...register('email', { required: true })}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              {...register('message', { required: true })}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: theme.spacing(2) }}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Box>
          </ContactForm>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

