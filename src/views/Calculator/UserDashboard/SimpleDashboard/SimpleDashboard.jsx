import React from 'react'
import { Grid } from "@mui/material";
import useSimpleDashboard from "./useSimpleDashboard.js";
import useQueries from "../../../../customHooks/useQueries/useQueries.js";
import TodayBox from "./TodayBox.jsx";
import YesterdayBox from "./YesterdayBox.jsx";
import MealListModal from "./MealListModal.jsx";

function SimpleDashboard({
  calorie_total_today,
  calorie_total_yesterday,
  mealsFromToday,
}) {
  const { showEffect } = useSimpleDashboard(calorie_total_today);
  const { isTablet } = useQueries();
  return (
    <Grid
      item
      sm={12}
      md={6}
      className={isTablet ? "simpleDashboard-mobile" : ""}
    >
      <TodayBox
        calorie_total_today={calorie_total_today}
        showEffect={showEffect}
      />

      <YesterdayBox calorie_total_yesterday={calorie_total_yesterday} />
      <MealListModal mealsFromToday={mealsFromToday} />
    </Grid>
  );
}

export default SimpleDashboard
