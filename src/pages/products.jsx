import * as React from 'react';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Switch, {SwitchProps } from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



export default function Products(){
    const paperStyle = {padding: '5px 10px', width: 600, margin:"30px auto", textAlign: "left"}
    const[products, setProducts]=React.useState([])

    React.useEffect(()=>{
        fetch("http://localhost:8080/products/view")
        .then(res=>res.json())
        .then((result)=>{
            setProducts(result);
        }
        )
    },[])
    return(
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{textAlign: "center"}}>Products list</h1>
                <Button style={{margin: "10px", textAlign: "left", background: "blue", color: "white"}}>Add a new product</Button>
        {products.map(product=>(
            <>
            <Paper elevation={6} style={{margin: "5px", padding: "10px", textAlign: "left"}} key={product.id}>
                Name: {product.name}<br/>
                Cost: {product.cost}<br/>
                Category: {product.description}<br/>
                Amount available: {product.amount}
        </Paper>
        <Button style={{margin: "10px", textAlign: "left", background: "blue", color: "white"}}>Add to cart</Button>
        </>
        ))
    }
    </Paper>
        </Container>
    )
}