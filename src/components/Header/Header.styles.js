import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1.5rem 5rem;
  background: ${props => props.backgroundColor || "linear-gradient(267.76deg, rgba(112, 225, 72, 0.94) 11.23%, rgba(72, 225, 106, 0.8) 96.67%)"};
  mix-blend-mode: multiply;
`
export const StyledNotifications = styled(IconButton)`
  background: #fff;
  position: relative;
  border-radius: 9px;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  span.counter {
    position: absolute;
    top: 6px;
    right: 6px;
    background-color: #ff0000;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    color: #fff;
    font-weight: 700;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`