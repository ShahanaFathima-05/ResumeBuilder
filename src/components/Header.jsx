import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function Header() {

   const aboutus="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'violet'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-resume-icon-png-image_4190798.jpg" height={'50px'} alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            rBuilder
          </Typography>
          <Tooltip title={aboutus}>
          <Button color="inherit">ABOUTUS</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header