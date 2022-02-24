import React from "react";
import { Card, Typography, Grid, Button, Stack, Link } from "@mui/material";

function NotificationActivo({ activo, box, partido, email, telefono }) {
  return (
    <Grid container className="ml-1">
      <Grid container component={Card}>
        <Grid container direction="row" className="p-2">
          {/* Activos */}
          <Grid item xs={1}>
            <Typography variant="body1" component="p" color="text.primary">
              Activos
            </Typography>
            <Typography variant="h6" color="green">
              {activo}
            </Typography>
          </Grid>
          {/* BOX/PARTIDO */}
          <Grid item xs={4}>
            <Grid item container>
              <Grid item xs={3}>
                <Typography variant="body1" component="p" color="text.primary">
                  Box
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body1" component="p">
                  {box}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                <Typography variant="body1" component="p" color="text.primary">
                  Partido
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body1" component="p" noWrap>
                  {partido}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Email telefono */}
          <Grid item xs={4} className="pl-4">
            <Grid item container>
              <Grid item xs={3}>
                <Typography variant="body1" component="p" color="text.primary">
                  Email
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Link>{email}</Link>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={3}>
                <Typography variant="body1" component="p" color="text.primary">
                  Teléfono
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body1" component="p">
                  {telefono}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Aceptar / rechazar */}
          <Grid item xs="auto">
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Button variant="contained">ACEPTAR</Button>
              <Button className="ml-3" variant="outlined">
                RECHAZAR
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NotificationActivo;
