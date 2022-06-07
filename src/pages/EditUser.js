import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUsers, updateUsers } from "../redux/actions";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let{id} = useParams();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Pleae Input all input Field");
    } else {
      dispatch(updateUsers(state, id));
      navigate("/");
      setError("");
    }
  };

  const { name, email, contact, address } = state;
  useEffect(() => {
      dispatch(getSingleUsers(id))
  }, [])

  const{user} = useSelector((state) => state.data);

  useEffect(() => {
      if(user){
          setState({
              ...user
          });
      }
  },[user])

  return (
    <div>
      <Button
        style={{ width: "130px", marginTop: "20px" }}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      ><ArrowBackIcon/>
        Go Back
      </Button>
      <h2>Edit User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name || ""}
          name="name"
          type="text"
          onChange={handleInputChange}

        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          value={email || ""}
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={contact || ""}
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address || ""}
          name="address"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          type="submit"
          variant="contained"
          color="primary"
          onChange={handleInputChange}
        ><SyncAltIcon/>
          Update
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;
