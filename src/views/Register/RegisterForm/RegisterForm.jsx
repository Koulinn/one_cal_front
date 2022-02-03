import React, { useEffect, useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import useRegisterForm from "./useRegisterForm.js";
import RegisterAlerts from "./RegisterAlerts.jsx";
import GoogleButton from "react-google-button";

function RegisterForm() {
  const [
    requestStatus,
    handleRegisterForm,
    handlePassword,
    isValidPassword,
    passwordMsg,
    emailValidation,
    isValidEmail,
    handleGoogleSignUp,
  ] = useRegisterForm();
  const [disableRegister, setDisableRegister] = useState(true);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleRegisterBtnStatus = () => {
    const { email, password } = formValues;
    if (email !== "" && isValidEmail && password !== "" && isValidPassword) {
      setDisableRegister(false);
    } else {
      setDisableRegister(true);
    }
  };

  useEffect(() => {
    handleRegisterBtnStatus();
  }, [isValidEmail, isValidPassword, requestStatus]);

  return (
    <Box component='form' sx={{ mt: 2 }} onSubmit={handleRegisterForm}>
      <TextField
        id='email'
        label='E-mail'
        variant='standard'
        fullWidth
        type='email'
        error={!isValidEmail}
        onChange={(e) => {
          setFormValues({ ...formValues, email: e.target.value });
          emailValidation(e);
        }}
        sx={{ mt: 3, mb: 2 }}
      />
      <TextField
        id='password'
        label='Password'
        variant='standard'
        fullWidth
        type={"password"}
        onChange={(e) => {
          setFormValues({ ...formValues, password: e.target.value });
          handlePassword(e.target.value);
        }}
        error={!isValidPassword}
        helperText={passwordMsg}
        sx={{ mt: 2, mb: 3 }}
      />
      <RegisterAlerts requestStatus={requestStatus} />
      <Button type='submit' sx={{ mt: 3 }} fullWidth disabled={disableRegister}>
        Register!
      </Button>
      <Typography
        component={"p"}
        variant='p'
        textAlign={"center"}
        sx={{ my: 5 }}
      >
        or
      </Typography>
      <GoogleButton
        onClick={handleGoogleSignUp}
        label={"Register with Google"}
        style={{ margin: "32px auto" }}
      />
    </Box>
  );
}

export default RegisterForm;
