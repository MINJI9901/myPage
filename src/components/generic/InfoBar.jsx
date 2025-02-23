import { useState, useContext, useEffect } from "react";

import {
  Box,
  Step,
  StepIcon,
  StepLabel,
  Stepper,
  useTheme,
} from "@mui/material";

import theme from "../../theme/theme";
import { RefContext } from "../../context/RefContext";

const steps = ["Home", "Projects", "About", "Contact"];

export default function InfoBar({ current }) {
  const { palette } = useTheme(theme);
  const refs = useContext(RefContext);

  const [activeStep, setActiveStep] = useState(0);
  // const [completed, setCompleted] = useState({});

  // Handle clicking step to move section
  const handleClickStep = (step, index) => {
    refs[step].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveStep(index);
  };

  const handleStep = () => {
    setActiveStep(steps.indexOf(current.id));
  };

  useEffect(handleStep, [current]);

  return (
    <Stepper
      orientation="vertical"
      activeStep={activeStep}
      sx={{
        position: "sticky",
        top: "20%",
        maxWidth: "30px",
        height: "20rem",
        margin: "50% auto",
        "& .MuiStepConnector-line": { height: "100%" },
      }}
    >
      {steps.map((step, index) => (
        <Step
          key={step}
          completed={false}
          onClick={() => handleClickStep(step, index)}
          sx={{
            "& .MuiStepLabel-root": {
              scale: "1.1", // circles size up
              cursor: "pointer",
            },
            "& .MuiStepLabel-root .Mui-active": {
              color: palette.secondary.main, // Active circle color
            },
            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
              fill: "white", // Active circle's number
            },
          }}
        >
          <StepLabel
            slotProps={{
              StepIcon: {
                sx: {
                  color: palette.secondary.main,
                },
              },
            }}
          >
            {step}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
