import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

export function User() {
    const paperStyle = {padding: '5px 10px', width:950, margin:"30px auto", textAlign: 'left'};
    const[name, setName]=React.useState('')
    const[mail, setMail]=React.useState('')
    const[address, setAddress]=React.useState('')
    const[phoneNumber, setPhoneNumber]=React.useState('')
    const[users, setUsers]=React.useState([])

    const handleClick=(e)=>{
        const user={address,mail,name,phoneNumber}
        console.log(user)
        fetch("http://localhost:8080/user/add", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        }).then(()=>{
            console.log("New user has been added")
        })
    }
    // React.useEffect(()=>{
    //     fetch("http://localhost:8080/user/view")
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         setUsers(result);
    //     }
    //     )
    // },[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{textAlign: "center"}}>Users registration</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Phone number" variant="outlined" fullWidth
      value={phoneNumber}
      onChange={(e)=>setPhoneNumber(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
      value={mail}
      onChange={(e)=>setMail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick} sx={{background: "#3a3e43"}}>Register</Button>
    </Box>
    </Paper>
    </Container>
  );
}
