import {data} from '../data/ProjectData.js'
import React from 'react';
import {Grid, Typography, Button, Card, CardContent, CardActions} from '@mui/material';
import styled from '@emotion/styled';

export default function Projects() {

  const ImageContainer = styled('div')({
    height: '200px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: '16px', 
  });

  const StyledImage = styled('img')({
    maxHeight: '100%',
    maxWidth: '100%',
  });

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {data.map((project) => (
        <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>

            <Card>
              <ImageContainer>
                <StyledImage src={project.image} alt="Project" />
              </ImageContainer>

              <CardContent>
                <Typography variant="h6" align="center">
                  {project.title}
                </Typography>
                <br />
                <Typography variant="body1" align="center">
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  fullWidth
                  onClick={() => {
                    window.open(project.link, '_blank');
                  }}
                >
                  Check it out!
                </Button>
              </CardActions>

            </Card>

        </Grid>
      ))}
    </Grid>
  );

};

