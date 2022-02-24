import { styled, alpha } from "@mui/material/styles";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { InputBase, StepContent, stepContentClasses } from "@mui/material";

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
  [`&.${stepConnectorClasses.root}`]: {
    marginLeft: 15,
  },
  [`&.${stepConnectorClasses.lineVertical}`]: {
    backgroundColor: "#5e5e5e",
  },
  [`&.${stepConnectorClasses}`]: {
    backgroundColor: "#5e5e5e",
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#5e5e5e",
    borderTopWidth: 3,
    borderRadius: 1,
    marginLeft: 10,
  },
}));

export const StyleStepIcon = styled("div")(({ theme, ownerState }) => ({
  // backgroundColor: "red",
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyleStepContent = styled(StepContent)(({ theme }) => ({
  [`&.${stepContentClasses.root}`]: {
    paddingLeft: "30px",
    marginLeft: 25,
    borderColor: "#5e5e5e",
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
