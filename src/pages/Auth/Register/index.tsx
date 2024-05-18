import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useRegisterValidation from "../../../lib/validation/useRegisterValidation";
import { useAppSelector } from "../../../store";
import { useRegisterFunction } from "./functions/registerFunctions";

const Register = () => {
  const authState = useAppSelector((state) => state.auth);

  const { control, reset, handleSubmit } = useRegisterValidation();
  const { onErrorSubmit, onSubmit } = useRegisterFunction({ reset });

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <Box sx={{ alignItems: "center", paddingY: "100px", marginX: "20%" }}>
      <Box sx={{ marginX: "20%", marginY: "2%" }}>
        <Typography sx={{ color: "green" }} variant="h4">
          Circle
        </Typography>
        <Typography variant="h5">Create Account Circle</Typography>
      </Box>
      <form>
        <Box
          width={"60%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginX: "20%",
          }}
        >
          {" "}
          <Controller
            control={control}
            name="fullname"
            render={({ field, fieldState }) => (
              <TextField
                label="Fullname"
                color="success"
                sx={{ borderColor: "white" }}
                {...field}
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                label="Email"
                color="success"
                sx={{ borderColor: "white" }}
                {...field}
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextField
                label="Password"
                color="success"
                type="password"
                sx={{ borderColor: "white" }}
                {...field}
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
              />
            )}
          />
          <Button
            variant="contained"
            // color="#00e676"
            onClick={handleSubmit(onSubmit, onErrorSubmit)}
            sx={{ bgcolor:"#00e676", color: "white", borderRadius: "20px" }}
          >
            Register
          </Button>
          <Box alignItems={"center"} sx={{display: "flex"}}>
            <Typography sx={{marginX:"2%"}} variant="subtitle2">Already have Account?</Typography>
            <Link
              to={"/auth/login"}
              style={{
                textDecoration: "none",
                color: "green",
                textAlign: "right",
              }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
