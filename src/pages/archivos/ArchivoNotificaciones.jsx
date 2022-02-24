import React from "react";
import {
  CkeckStepIcon,
  InfoStepIcon,
  RejectedtepIcon,
  stringAvatar,
  StyledBadge,
  StyledConnector,
  StyleStepContent,
  TrasferStepIcon,
} from "./ArchivoNotificaciones.styles";
import {
  Avatar,
  Box,
  Typography,
  StepLabel,
  Step,
  Stepper,
  Link,
} from "@mui/material";
import Filter from "../../components/archivos/verificacion/Filter";
import NotificationActivo from "../../components/archivos/verificacion/NotificationActivo";

function ArchivoNotificaciones() {
  return (
    <Box>
      <Filter />
      <Stepper
        nonLinear
        orientation="vertical"
        connector={<StyledConnector />}
        activeStep={1}
      >
        <StyleStepContent />
        <Step>
          <StepLabel
            StepIconComponent={TrasferStepIcon}
            optional={
              <Typography
                className="pl-1 mt-1"
                variant="body1"
                component="p"
                color="text.primary"
              >
                Hoy, 17:30 Hs
              </Typography>
            }
          >
            <Box className="d-flex pt-3 pl-1">
              <Typography variant="body1" component="p" color="black">
                Transferencia recibida de Box Las Marias
              </Typography>
              <StyledBadge badgeContent={1} />
            </Box>
          </StepLabel>
          <StyleStepContent>
            <NotificationActivo
              activo="10"
              box="Las Marias"
              partido="Villa Consitucion, Santa Ana, Buenos Aires"
              email="email@email.com"
              telefono="(987) 53679865"
            />
          </StyleStepContent>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={CkeckStepIcon}
            optional={
              <Box className="pl-1 mt-1">
                <Typography
                  className="d-flex flex-row mt-1"
                  variant="body1"
                  component="p"
                  color="text.primary"
                >
                  <Avatar
                    {...stringAvatar("Sabrina Gracias Demestre")}
                    className="mr-1 "
                    color="green"
                  />{" "}
                  Sabrina Gracias Demestre &middot; Boxes
                </Typography>

                <Typography
                  variant="body1"
                  className="mt-1"
                  component="p"
                  color="text.primary"
                >
                  Hoy, 16:30 Hs
                </Typography>
              </Box>
            }
          >
            <Typography className="flex-row d-flex pt-1 pl-1">
              Transferencia aceptada de
              <font color="green" className="pl-1">
                Box Las Marias
              </font>
            </Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={CkeckStepIcon}
            optional={
              <Box className="pl-1 mt-1">
                <Typography
                  variant="body1"
                  component="p"
                  color="text.primary"
                  className="d-flex flex-row"
                >
                  {"Activos > box 2B > box 1B-A"}
                </Typography>

                <Typography
                  variant="body1"
                  className="mt-1"
                  component="p"
                  color="text.primary"
                >
                  Hoy, 16:30 Hs
                </Typography>
              </Box>
            }
          >
            <Typography className="flex-row d-flex pl-1">
              Nuevo excell disponible para descargar en{" "}
              <font color="green" className="pl-1">
                Activos
              </font>
            </Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={InfoStepIcon}
            optional={
              <Typography
                variant="body1"
                component="p"
                color="text.primary"
                className="pl-1 mt-1"
              >
                Hoy, 16:30 Hs
              </Typography>
            }
          >
            <Typography className="flex-row d-flex pt-3 pl-1">
              La detención de tus activos no fue actualizada en los últimos 3
              meses.{" "}
              <Link color="#ED8A98" className="pl-1">
                Actualizar
              </Link>
            </Typography>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            StepIconComponent={RejectedtepIcon}
            optional={
              <Typography
                variant="body1"
                component="p"
                color="text.primary"
                className="pl-1 mt-1"
              >
                Hoy, 16:30 Hs{" "}
                <Link color="error" className="pl-1">
                  Ver más
                </Link>
              </Typography>
            }
          >
            <Typography className="flex-row d-flex pt-3 pl-1">
              Transferencia rechazada de{" "}
              <font color="red" className="pl-1">
                Box Las Leñas
              </font>
            </Typography>
          </StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
}

export default ArchivoNotificaciones;
