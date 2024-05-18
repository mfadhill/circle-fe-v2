import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useLoginValidation from "../../../lib/validation/useLoginValidation";
import { useAppSelector } from "../../../store";
import { useLoginFunction } from "./functions/loginFunctions";

const Login = () => {
  const authState = useAppSelector((state) => state.auth);

  const { control, reset, handleSubmit } = useLoginValidation();
  const { onErrorSubmit, onSubmit } = useLoginFunction({ reset });

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <Box sx={{ alignItems: "center", paddingY: "100px", marginX: "20%" }}>
      <Box sx={{ marginX: "20%", marginY: "2%" }}>
        <Typography sx={{ color: "green" }} variant="h4">
          Circle
        </Typography>
        <Typography variant="h5">Login To Circle</Typography>
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
          <Link
            to={"#"}
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Link>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit(onSubmit, onErrorSubmit)}
            sx={{ bgcolor: "#00e676", color: "white", borderRadius: "20px" }}
          >
            LOGIN
          </Button>
        </Box>
      </form>

      <Typography sx={{ marginX: "20%", marginY: "2%" }} variant="subtitle2">
        Don't have Account yet ?
        <Link
          to={"/auth/register"}
          style={{
            textDecoration: "none",
            color: "green",
            textAlign: "right",
          }}
        >
          Create Account
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
