import styled from 'styled-components';
import { Box } from '@mui/material';

export const StyleBoxLegend = styled(Box)(({ color }) => ({
    width: 20,
    height: 20,
    backgroundColor: color,
    borderRadius: 6
}));

export const StyleBoxFilter = styled(Box)(({ color }) => ({
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: color,
    ':hover': {
        backgroundColor: color,
        opacity: '50%',
    },
}));