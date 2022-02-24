import { styled } from "@mui/material/styles";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { InputBase, StepContent, stepContentClasses } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import InfoIcon from "@mui/icons-material/Info";
import CheckIcon from "@mui/icons-material/Check";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export const StyledBadge = styled(BadgeUnstyled)`
  padding-left: 20px;
  font-size: 14px;
  font-variant: tabular-nums;
  font-feature-settings: "tnum";
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  & .MuiBadge-badge {
    width: 10px;
    height: 10px;
    padding: 0.1px 4px;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
    background-color: #ff0000;
    border-radius: 50%;
  }
`;

export const StyledConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#5e5e5e",
    borderTopWidth: 3,
    borderRadius: 1,
    marginLeft: 12,
  },
}));

export const TrasferStepIcon = styled(SwapHorizIcon)(() => ({
  backgroundColor: "#3969E8",
  borderRadius: "50%",
  color: "white",
  width: "41.31px",
  height: "40.95px",
  padding: "3px",
}));

export const InfoStepIcon = styled(InfoIcon)(() => ({
  backgroundColor: "#ED8A98",
  borderRadius: "50%",
  color: "white",
  width: "41.31px",
  height: "40.95px",
  padding: "3px",
}));

export const CkeckStepIcon = styled(CheckIcon)(() => ({
  backgroundColor: "green",
  borderRadius: "50%",
  color: "white",
  width: "41.31px",
  height: "40.95px",
  padding: "3px",
}));

export const RejectedtepIcon = styled(ClearOutlinedIcon)(() => ({
  backgroundColor: "red",
  borderRadius: "50%",
  color: "white",
  width: "41.31px",
  height: "40.95px",
  padding: "3px",
}));

export const StyleStepContent = styled(StepContent)(({ theme }) => ({
  [`&.${stepContentClasses.root}`]: {
    paddingLeft: "30px",
    marginLeft: 24,
    borderColor: "#5e5e5e",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: "green",
      width: 24,
      height: 24,
    },
    children: `${name.split(" ")[0][0]}`,
  };
};
