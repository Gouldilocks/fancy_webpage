import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { keyframes } from '@emotion/react';
import Profile from '../static/looking_away.jpg';
import {aboutMe} from '../data/aboutMe';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutMeContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '800px',
  margin: theme.spacing(2),
  '& h4, & p': {
    animation: `${fadeIn} 1s`,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '15rem',
  height: '15rem',
  margin: 'auto',
  border: `2px solid ${theme.palette.primary.main}`,
}));

const About = () => {
  const aboutMeText = aboutMe.description;

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
        <Grid item xs={12} md={10} lg={8}>
          <AboutMeContainer elevation={6}>
            <StyledAvatar alt="Your Name" src={Profile} />
            <Typography variant="h4" align="center" gutterBottom>
              {aboutMe.name}
            </Typography>
            <Typography variant="body1" align="center">
              {aboutMeText}
            </Typography>
          </AboutMeContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

