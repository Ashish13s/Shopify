import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{
            backgroundColor: "black",
            color: "white",
            paddingY: 3,
        }}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <Box>
                    <Button className='pb-5' variant='h6'>About</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Blog</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Press</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Jobs</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Partners</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <Box>
                    <Button className='pb-5' variant='h6'>Marketing</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Analytics</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Commerce</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Insights</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Support</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Documentation</Typography>
                <Box>
                    <Button className='pb-5' variant='h6'>Guides</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>API Status</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <Box>
                    <Button className='pb-5' variant='h6'>Claim</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Privacy</Button>
                </Box>
                <Box>
                    <Button className='pb-5' variant='h6'>Terms</Button>
                </Box>
            </Grid>
            <Grid className='pt-20' item xs={12}>
                <Typography vataint="body2" component="p" align="center">
                    &copy; 2023 Shopify. All rights reserved.
                </Typography>
            </Grid>

        </Grid>
    </div>
  )
}

export default Footer