import React from "react";
import { Box } from "@mui/material";
import PaperRoot from "../../UIComponents/paper";
import tracking from '../../assets/images/tracking.png';

function TrackingCard() {
  return (
    <PaperRoot sx={{marginTop: '0.5rem'}}>
      <Box component='img' src={tracking} width="90%" height="60vh" />
    </PaperRoot>
  );
}

export default TrackingCard;
