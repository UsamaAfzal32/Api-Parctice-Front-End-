import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Appbar = () => {
  return (
   
    <AppBar color='primary'>
      <Toolbar  sx={{backgroundColor:'#f58a42',width:'100vw',display:'flex',justifyContent:'space-between'}} >
      <Box sx={{height:'90%',width:'10%'  }}>
      <img height='100%' width='80%' src='https://assets.akaunting.com/site/img/logo/akaunting-logo-horizontal.svg'>
      </img>
     </Box>
     <Box height='90%' width='10%' >

     <Badge badgeContent={4} color="primary" >  <ShoppingCartOutlinedIcon/></Badge> 
     </Box>
      </Toolbar>
      </AppBar>

  )
}

export default Appbar