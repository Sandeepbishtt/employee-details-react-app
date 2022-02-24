import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const nameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    localStorage.setItem("token", JSON.stringify(data));
    setUsername("");
    setPassword("");
    navigate("/dashboard");
  };

  return (
    <>
      <Grid style={{ marginTop: "6rem" }}>
        <form onSubmit={submitHandler}>
          <Paper
            elevation={10}
            style={{
              padding: 20,
              height: "50vh",
              width: 280,
              margin: "20px auto",
            }}
          >
            <Grid align="center">
              <Avatar style={{ backgroundColor: "#1bbd7e" }}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Login</h2>
            </Grid>
            <TextField
           
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              onChange={nameChangeHandler}
              value={username}
              style={{marginBottom:'1rem'}}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={passwordChangeHandler}
              
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: "2rem" }}
              fullWidth
            >
              Sign in
            </Button>
          </Paper>
        </form>
      </Grid>
    </>
  );
};

export default LoginPage;
