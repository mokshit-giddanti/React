import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { addProject } from "../backend/api";
import {
  FormControlLabel,
  FormControl,
  InputLabel,
  Input,
  Box,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

// Styled form control for better styling
const StyledFormControl = ({ children }) => (
  <FormControl fullWidth sx={{ marginBottom: "20px" }}>
    {children}
  </FormControl>
);

const AddTeams = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    id: "",
    TeamNumber: "",
    subj: "",
    pname: "",
    startdate: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const register = () => {
    const { id } = user;
    if (id) {
      addProject(user, history);
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div className="register">
        <h1>Register for Projects</h1>
        <Box maxWidth="400px">
          <StyledFormControl>
            <InputLabel>Name</InputLabel>
            <Input name="name" value={user.name} onChange={handleChange} />
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Id (Number)</InputLabel>
            <Input
              type="number"
              name="id"
              value={user.id}
              onChange={handleChange}
            />
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Team Number (Number)</InputLabel>
            <Input
              type="number"
              name="TeamNumber"
              value={user.TeamNumber}
              onChange={handleChange}
            />
          </StyledFormControl>

          <StyledFormControl>
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
              name="subj"
              value={user.subj}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="MSWD" control={<Radio />} label="MSWD" />
              <FormControlLabel value="PFSD" control={<Radio />} label="PFSD" />
            </RadioGroup>
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Project Name</InputLabel>
            <Input name="pname" value={user.pname} onChange={handleChange} />
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel></InputLabel>
            <Input
              type="date"
              name="startdate"
              value={user.startdate}
              onChange={handleChange}
            />
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel>Status</InputLabel>
            <Input name="status" value={user.status} onChange={handleChange} />
          </StyledFormControl>
        </Box>
        <Button variant="contained" onClick={register}>
          Add Project
        </Button>
      </div>
    </div>
  );
};

export default AddTeams;
