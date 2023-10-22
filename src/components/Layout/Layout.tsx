import React from "react";
import { Box, Container, Paper, Toolbar, Typography, Stack, Grid } from '@mui/material';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default React.memo(function Layout() {
    return (
      <>
        <Paper>
          <Container maxWidth="xl">
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Brightness4RoundedIcon />
                  <Typography variant="h6" noWrap>
                    Яндекс задание
                  </Typography>
                </Stack>
              </Grid>
              <Grid item ml="auto" mr="auto">
                <Navigation />
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <Container>
          <Stack pt={2} pb={2} mt={2} alignItems="center" justifyContent="center">
            <Outlet />
          </Stack>
        </Container>
      </>
    )
});