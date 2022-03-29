import React from 'react';
import { Button, Grid, Card } from '@mui/material';

function ExpandableFilters({ buttonText = ['Ver mas filtros', 'Cerrar filtros'], TopPart, ExpandablePart, BottomPart }) {
  const [expandedFilters, setExpandedFilters] = React.useState(false);
  const toggleExpand = () => setExpandedFilters(value => !value);

  return (
   <Grid
    component={Card}
    container
    className='p-2 mb-4 mt-2 align-center'
    spacing={2}
   >
    {TopPart && <TopPart />}
    <Grid item xs={3} className='d-flex justify-center'>
     <Button variant='text' onClick={toggleExpand}>
      {!expandedFilters ? buttonText[0] : buttonText[1]}
     </Button>
    </Grid>
    {expandedFilters && <ExpandablePart />}
    {BottomPart && <BottomPart />}
   </Grid>
  );
}

export default ExpandableFilters;