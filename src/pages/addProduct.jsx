import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

export function AddProduct() {
    const paperStyle = {padding: '5px 10px', width:950, margin:"30px auto", textAlign: 'left'};
    const[name, setName]=React.useState('')
    const[cost, setCost]=React.useState('')
    const[description, setDescription]=React.useState('')
    const[amount, setAmount]=React.useState('')
    const[products, setProducts]=React.useState([])

    const handleClick=(e)=>{
        const product={amount,cost,description,amount}
        console.log(product)
        fetch("http://localhost:8080/goods/add", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(product)
        }).then(()=>{
            console.log("New product has been added")
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
        <h1 style={{textAlign: "center"}}>Add a new product</h1>
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
      <TextField id="outlined-basic" label="Cost" variant="outlined" fullWidth
      value={cost}
      onChange={(e)=>setCost(e.target.value)}
      />
      <TextField id="outlined-basic" label="Category" variant="outlined" fullWidth
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <TextField id="outlined-basic" label="Amount" variant="outlined" fullWidth
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick} sx={{background: "#3a3e43"}}>Add</Button>
    </Box>
    </Paper>
    </Container>
  );
}
