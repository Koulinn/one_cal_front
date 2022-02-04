import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function YesterdayBox({ calorie_total_yesterday }) {
  return (
    <Box className='card-secondary'>
      <Box className='card-secondary-inner-wrapper' sx={{ px: 3, pb: 2 }}>
        <Typography
          component='h5'
          variant='h5'
          textAlign={"center"}
          sx={{ mt: 2 }}
        >
          Yesterday
        </Typography>
        <Typography
          component='p'
          variant='p'
          textAlign={"center"}
          sx={{ mt: 2 }}
        >
          {calorie_total_yesterday
            ? `${calorie_total_yesterday} Kcal`
            : "Really? You always forget about me..."}
        </Typography>
      </Box>
    </Box>
  );
}

export default YesterdayBox;
