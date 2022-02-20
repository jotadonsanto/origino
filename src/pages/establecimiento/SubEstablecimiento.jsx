import React, { useEffect } from 'react';
import { Grid, Stack, Button, Breadcrumbs, Link, Typography, Card, Avatar, IconButton, Popover, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const cards = [0, 1, 2];

function SubEstablecimiento({ onLoad }) {
  // onLoad change theme
  useEffect(() => {
    onLoad('blue');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // For file tooltip
  const [dropdown, setDropdown] = React.useState(false);
  const dropdownOpen = Boolean(dropdown);
  const showDropdown = (event) => { setDropdown(event.currentTarget) };
  const closeDropdown = () => { setDropdown(null);};
  const dropdownId = dropdownOpen ? 'new-file-popover' : undefined;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className="mb-2">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Establecimiento
            </Link>
            <Link underline="hover" color="inherit" href="/">
              SubEstablecimiento
            </Link>
            <Typography color="primary">SubEstablecimiento</Typography>
          </Breadcrumbs>
          <Button className="ml-2" variant="contained">CREAR ESTABLECIMIENTO</Button>
        </Stack>
      </Grid>

      {cards.map((page, index) => (
      <Grid item xs={4} key={index}>
        <Card className="p-2">
          <div className="d-flex flex-row justify-between pr-2">
            <div className="d-flex flex-row align-start">
              <Avatar aria-label="recipe" className="mr-2 mt-1">
                R
              </Avatar>
              <span>
                <Typography variant="subtitle2" component="p" color="text.primary" className="mb-2">Establecimientos</Typography>
                <Typography variant="caption" component="p" color="text.light">Empresa</Typography>
                <Typography variant="subtitle2" component="p" className="mt-0 mb-2">Empresa 2</Typography>
              </span>
            </div>
            <div>
              <IconButton aria-label="settings" onClick={showDropdown}>
                <MoreVertIcon />
              </IconButton>
              <Popover
                id={dropdownId}
                open={dropdown}
                anchorEl={dropdown}
                onClose={closeDropdown}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                <MenuItem divider>Opcion 1</MenuItem>
                <MenuItem divider>Opcion 2</MenuItem>
                <MenuItem divider>Opcion 3</MenuItem>
              </Popover>
            </div>
          </div>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}

export default SubEstablecimiento;