import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TodayBox({ showEffect, calorie_total_today }) {
  return (
    <Box
      className='card-primary'
      sx={{
        mb: 5,
      }}
    >
      <Box
        className={"card-primary-inner-wrapper " + showEffect}
        sx={{ mb: 3, px: 4 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "fit-content",
            margin: "auto",
          }}
        >
          <Typography
            component='h4'
            variant='h4'
            textAlign={"center"}
            sx={{ mt: 2, mb: 3 }}
          >
            Today
          </Typography>
        </Box>
        <Typography
          component='p'
          variant='p'
          textAlign={"center"}
          sx={{ mb: 1 }}
        >
          {calorie_total_today ? `${calorie_total_today} Kcal` : `0000 Kcal`}
        </Typography>
      </Box>
    </Box>
  );
}

export default TodayBox;
