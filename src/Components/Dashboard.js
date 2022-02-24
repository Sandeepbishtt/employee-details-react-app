/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getEmployeeDetails } from "../Redux/actionCreators";
import { Button, Avatar, Paper, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,AppBar,Toolbar,Modal
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Detail from "./EmployeeDetails";
import AddEmployee from './EmployeeForm/AddEmployee'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteEmployee } from "../Redux/actionCreators";
import { useDispatch } from "react-redux";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 220,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
 
  };



const Dashboard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getEmployeeDetails())
  },[])


  const data = useSelector((state) => state.data);
  const name = JSON.parse(localStorage.getItem("token"));
  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [open, setOpen] = React.useState(false);

  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
const [editIndex,setEditIndex] = useState(0)
  const handleOpen = () => {
    setOpen(true);
    setEdit(false);
  };
  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };
  const editHandler = (val, id) => {
    setEdit(true);
    setEditData(val)
    setOpen(true);
    setEditIndex(id)
    dispatch(deleteEmployee(id))
  };

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState([]);

  const employeeDetailsHandler = (val) => {
    setDataForModal(val);
    setConfirmOpen(true);
  };
  return (
    <>
     <Detail
        data={dataForModal}
        title="Employee Details"
        open={confirmOpen}
        setOpen={setConfirmOpen}
      />
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddEmployee
            close={() => setOpen()}
            editVal={edit}
            editDataValue={editData}
            editIndex={editIndex}
          />
        </Box>
      </Modal>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            elevation={10}
            style={{
              padding: 20,
              height: "35vh",
              width: 200,
              margin: "20px auto",
            }}
          >
            <Grid>
              <Avatar
                style={{
                  backgroundColor: "#1bbd7e",
                  marginLeft: "15%",
                  width: "8rem",
                  height: "8rem",
                  marginBottom: "2rem",
                }}
                src={
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                }
              ></Avatar>
            </Grid>
            <Typography gutterBottom variant="h5" component="h3">
              <strong>{name.username}</strong>
            </Typography>

            <Button
              color="primary"
              variant="contained"
              type="button"
              onClick={logOutHandler}
            >
              Logout
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={9}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ width: "230px", margin: "1rem" }}>
          <Toolbar onClick={handleOpen}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add New Employee
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>Node_id</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Site_Admin</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((val) => {
                  return (
                    <TableRow key={val.id} >
                      <TableCell>{val.id}</TableCell>
                      <TableCell onClick={ () => employeeDetailsHandler(val)} >
                        <img src={val.avatar_url} alt="pic" width="70px" />
                      </TableCell>
                      <TableCell onClick={ () => employeeDetailsHandler(val)}>{val.login}</TableCell>
                      <TableCell onClick={ () => employeeDetailsHandler(val)}>{val.url}</TableCell>
                      <TableCell>{val.node_id}</TableCell>
                      <TableCell>{val.type}</TableCell>
                      <TableCell>{val.site_admin ? "True" :"False"}</TableCell>
                      <TableCell>
                        <EditIcon  onClick={() => editHandler(val,val.id)} />
                      </TableCell>
                      <TableCell>
                        {" "}
                        <DeleteIcon onClick={() => dispatch(deleteEmployee(val.id))} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
