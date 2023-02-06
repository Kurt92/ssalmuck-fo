import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameCheck = () => {
    console.log("Checking if username is available...");
    // Perform a check to see if the username is available
    // For example, you can make a API call to your server to check if the username exists in the database
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log("Sign up success!");
      } else {
        setError("Passwords do not match");
      }
    } else {
      setError("All fields are required");
    }
  };

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Button variant="contained" onClick={handleUsernameCheck}>
        Check Availability
      </Button>
      <TextField
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpPage;
