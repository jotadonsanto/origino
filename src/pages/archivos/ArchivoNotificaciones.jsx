import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Badge from "@mui/material/Badge";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CheckIcon from "@mui/icons-material/Check";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PropTypes from "prop-types";
import {
  Search,
  SearchIconWrapper,
  StyledBadge,
  StyledConnector,
  StyledInputBase,
  StyleStepContent,
  StyleStepIcon,
} from "./ArchivoNotificaciones.styles";
import {
  Card,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-light-svg-icons";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { StyledSlider } from "../../components/activos/ActivosTable.styles";

function ArchivoNotificaciones() {
  const steps = [
    {
      label: "Trasferencia recibida de Box Las Marias",
      date: "Hoy, 17:30 Hs",
      description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Trasferencia aceptada de Box Las Leñas",
      date: "Hoy, 16:30 Hs",
      user: "Sabrina García Demestre · Boxes",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Nuevo excel disponible para descarga en Activos",
      date: "Hoy, 16:30 Hs",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
    {
      label:
        "La dentición de tus activos no fue actualizada en los últimos 3 meses. Actualizar",
      date: "Hoy, 16:30 Hs",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
    {
      label: "Transferencia rechazada de Box Las Leñas",
      date: "Hoy, 16:30 Hs",
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
  ];

  const [value, setValue] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //Con esta funcion defino la letra dentro del avatar
  const stringAvatar = (name) => {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  };

  //custom StepIcon
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    const icons = {
      1: (
        <CompareArrowsIcon
          sx={{ backgroundColor: "green", borderRadius: 10, color: "white" }}
        />
      ),
      2: (
        <CheckIcon
          fontSize="large"
          sx={{ backgroundColor: "green", borderRadius: 10, color: "white" }}
        />
      ),
      3: (
        <NotificationImportantOutlinedIcon
          fontSize="large"
          sx={{ backgroundColor: "orange", borderRadius: 10, color: "white" }}
        />
      ),
      4: (
        <ClearOutlinedIcon
          fontSize="large"
          sx={{ backgroundColor: "red", borderRadius: 10, color: "white" }}
        />
      ),
    };

    return <StyleStepIcon>{icons[String(props.icon)]}</StyleStepIcon>;
  }

  const [selectedFilter, setSelectedFilter] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedFilters, setExpandedFilters] = useState();

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const handleClick = (event, row) => {
    console.log("do something with this row");
    console.log(row);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleChecked = () => setExpandedFilters((value) => !value);

  return (
    <Box>
      {/* <Grid container>
        <Grid container component={Card}>
          <Grid item>
            <TextField
              id="filled-search"
              type="search"
              className="mr-2"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputAdornment>
                ),
              }}
            />
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Fecha"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item component={FormControl} className="pr-2" xs={3}>
              <InputLabel id="test">Tipo de actividad</InputLabel>
              <Select labelId="test" label="Filtro" className="w-100">
                <MenuItem value={10}>Actividad 1</MenuItem>
                <MenuItem value={20}>Actividad 1</MenuItem>
                <MenuItem value={30}>Actividad 1</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}

      {/* Filtros */}
      <Grid component={Card} container className="p-2 mb-4 mt-2 align-center">
        <Grid item component={FormControl} className="pr-2" xs={3}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="search"
            className="mr-2"
            defaultValue={"Buscar por box, evento, etc"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faSearch} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item component={FormControl} className="pr-2" xs={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item component={FormControl} className="pr-2" xs={3}>
          <InputLabel id="test">Tipo de Actividad</InputLabel>
          <Select
            labelId="test"
            value={selectedFilter}
            label="Filtro"
            className="w-100"
          >
            <MenuItem value={10}>Actividad 1</MenuItem>
            <MenuItem value={20}>Actividad 2</MenuItem>
            <MenuItem value={30}>Actividad 3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3} className="d-flex justify-center">
          <Button variant="text" onClick={toggleChecked}>
            {!expandedFilters ? "Ver mas filtros" : "Cerrar filtros"}
          </Button>
        </Grid>
        {expandedFilters && (
          <span>
            <Grid
              item
              component={FormControl}
              className="pr-2 mt-3 align-center"
              xs={12}
              xl={6}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={true}
                    onChange={() => console.log("do something on check")}
                  />
                }
                label="Checkbox"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={false}
                    onChange={() => console.log("do something on check")}
                  />
                }
                label="Checkbox"
              />

              <RadioGroup row defaultValue="b" name="radio-buttons-group">
                <FormControlLabel
                  value="a"
                  control={<Radio />}
                  label="Radio 1"
                />
                <FormControlLabel
                  value="b"
                  control={<Radio />}
                  label="Radio 2"
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              component={FormControl}
              className="pr-2 mt-3 align-center"
              xs={12}
              xl={6}
            >
              <InputLabel id="test">Raza</InputLabel>
              <Select
                labelId="test"
                value={selectedFilter}
                label="Filtro"
                onChange={handleChange}
                className="w-100"
              >
                <MenuItem value={10}>Bovina</MenuItem>
                <MenuItem value={20}>Angus</MenuItem>
                <MenuItem value={30}>Wagyu</MenuItem>
              </Select>
              <StyledSlider defaultValue={30} aria-label="Disabled slider" />
            </Grid>
          </span>
        )}
      </Grid>
      {/* Fin Filtros */}

      <Stepper
        // alternativeLabel
        activeStep={activeStep}
        orientation="vertical"
        connector={<StyledConnector color="red" />}
      >
        {/* {steps.map((step, index) => ( */}
        <Step
        // key={step.label}
        >
          <StepLabel
            StepIconComponent={ColorlibStepIcon}
            optional={<Typography>Hoy, 17:30 Hs</Typography>}
          >
            <div className="d-flex">
              <Typography>Trasferencia recibida de Box Las Marias</Typography>
              <StyledBadge badgeContent={1} />
            </div>
          </StepLabel>
          <StyleStepContent>
            <Grid container>
              <Grid container component={Card}>
                <Grid container direction="row" className="p-2">
                  {/* Activos */}
                  <Grid item xs={1}>
                    <Typography
                      variant="body1"
                      component="p"
                      color="text.primary"
                    >
                      Activos
                    </Typography>
                    <Typography variant="h6" color="green">
                      10
                    </Typography>
                  </Grid>
                  {/* BOX/PARTIDO */}
                  <Grid item xs={4}>
                    <Grid item container>
                      <Grid item xs={3}>
                        <Typography
                          variant="body1"
                          component="p"
                          color="text.primary"
                        >
                          Box
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1" component="p">
                          Las Marias
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container>
                      <Grid item xs={3}>
                        <Typography
                          variant="body1"
                          component="p"
                          color="text.primary"
                        >
                          Paritido
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1" component="p" noWrap>
                          Villa Constitución, Santa, Buenos Aires
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Email telefono */}
                  <Grid item xs={4} className="pl-4">
                    <Grid item container>
                      <Grid item xs={3}>
                        <Typography
                          variant="body1"
                          component="p"
                          color="text.primary"
                        >
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Link>email@email.com</Link>
                      </Grid>
                    </Grid>
                    <Grid item container>
                      <Grid item xs={3}>
                        <Typography
                          variant="body1"
                          component="p"
                          color="text.primary"
                        >
                          Teléfono
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1" component="p">
                          (987)58679865
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Aceptar / rechazar */}
                  <Grid item xs="auto">
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button variant="contained">ACEPTAR</Button>
                      <Button className="ml-3" variant="outlined">
                        RECHAZAR
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyleStepContent>
        </Step>
        {/* ))} */}
        <Step
        // key={step.label}
        >
          <StepLabel
            StepIconComponent={ColorlibStepIcon}
            optional={<Typography>Hoy, 16:30 Hs</Typography>}
          >
            Trasferencia recibida de Box Las Marias{" "}
            <StyledBadge badgeContent={1} />
          </StepLabel>
          <StyleStepContent>
            <Typography>
              Try out different ad text to see what brings in the most
              customers, and learn how to enhance your ads using features like
              ad extensions. If you run into any problems with your ads, find
              out how to tell if they're running and how to resolve approval
              issues.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                </Button>
                <Button
                  // disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StyleStepContent>
        </Step>
        <Step
        // key={step.label}
        >
          <StepLabel
            StepIconComponent={ColorlibStepIcon}
            optional={<Typography>Hoy, 16:30 Hs</Typography>}
          >
            Trasferencia recibida de Box Las Marias{" "}
            <StyledBadge badgeContent={1} />
          </StepLabel>
          <StepContent>
            <Typography>
              Try out different ad text to see what brings in the most
              customers, and learn how to enhance your ads using features like
              ad extensions. If you run into any problems with your ads, find
              out how to tell if they're running and how to resolve approval
              issues.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
                </Button>
                <Button
                  // disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      </Stepper>

      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}

export default ArchivoNotificaciones;
