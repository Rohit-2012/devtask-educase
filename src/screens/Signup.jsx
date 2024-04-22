import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CreateAccountBtn from "../components/CreateAccountBtn";

const Signup = () => {

  return (
    <section className="px-5 min-w-full min-h-[100vh] flex flex-col gap-3 justify-between py-10">
      <h1 className="text-3xl font-semibold text-[#1D2226] text-left w-4/6 mb-4">
        Create your PopX account
      </h1>

      <form className="flex flex-col gap-6">
        <TextField
          label="Full Name"
          type="text"
          placeholder="Enter full name"
          color="secondary"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
            color: "secondary",
            focused: true,
          }}
        />
        <TextField
          label="Phone number"
          type="tel"
          placeholder="Enter phone number"
          color="secondary"
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
            color: "secondary",
            focused: true,
          }}
        />
        <TextField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          color="secondary"
          fullWidth
          required
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
          required
          InputLabelProps={{
            shrink: true,
            color: "secondary",
            focused: true,
          }}
        />

        <TextField
          label="Company name"
          type="text"
          placeholder="Enter company name"
          color="secondary"
          fullWidth
          InputLabelProps={{
            shrink: true,
            color: "secondary",
            focused: true,
          }}
        />
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ color: "black" }} color="secondary"
          >
            Are you an Agency?<span className="text-red-500">*</span>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        
          >
            <FormControlLabel value="yes" control={<Radio color="secondary"/>} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="secondary"/>} label="No" />
          </RadioGroup>
        </FormControl>
      </form>
      <CreateAccountBtn path={'profile'}/>
    </section>
  );
};

export default Signup;
