import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmpty = email.length === 0 || password.length === 0;

  return (
    <section className="px-5 min-w-full min-h-[100vh] flex flex-col gap-3 justify-start pt-10">
      <h1 className="text-3xl font-semibold text-[#1D2226] text-left w-4/6">
        Signin to your PopX account
      </h1>
      <p className="text-lg text-left text-[#1D2226] text-opacity-60 mb-4 w-4/6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form className="flex flex-col gap-6">
        <TextField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          color="secondary"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            shrink: true,
            color: "secondary",
            focused: true,
          }}
        />

        <TextField
          label="Password"
          type="password"
          placeholder="Enter password"
          color="secondary"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            shrink: true,
            color: "secondary",
            focused: true,
          }}
        />
        {isEmpty ? (
          <Button variant="contained" color="secondary" sx={{padding: 1.5}} disabled>
            Login
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{padding: 1.5, backgroundColor: '#6C25FF'}}
            component={Link}
            to="/profile"
          >
            Login
          </Button>
        )}
      </form>
    </section>
  );
};

export default Signin;
