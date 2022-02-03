import React, { useEffect } from 'react'
import useUser from '../../customHooks/useUser/useUser.js'
import { useNavigate } from 'react-router-dom'
import { Container, Typography } from "@mui/material";
import useQueries from "../../customHooks/useQueries/useQueries.js";

function Home() {
  const { requestStatus } = useUser();
  const navigateTo = useNavigate();
  const isTablet = useQueries();

  const isUserLogged = () => {
    if (requestStatus === "success") {
      navigateTo("/calc");

      return <></>;
    }
  };

  useEffect(() => {
    isUserLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestStatus]);

  return (
    <Container id='home'>
      <Typography
        component={"h1"}
        variant={isTablet?.isTablet ? "h4" : "h1"}
        textAlign={"center"}
      >
        Burn kcalories
      </Typography>

      <button
        className='main-CTA cursor-pointer'
        onClick={() => navigateTo("/register")}
      >
        Let's get started
      </button>
    </Container>
  );
}

export default Home
