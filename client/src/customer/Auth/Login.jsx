import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../State/Auth/Action';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)
    
    const handleSumbit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget)

        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        }
        dispatch(login(userData));
    }
  return (
    <div>
        <form onSubmit={handleSumbit}>
            <Grid container spacing = {3}>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id = 'email'
                        name = 'email'
                        label = "Email"
                        fullWidth 
                        autoComplete='email'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        id = 'password'
                        name = 'password'
                        label = "Password"
                        fullWidth 
                        autoComplete='password'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        className = ' w-full'
                        type = 'sumbit'
                        variant = 'contained'
                        size = 'large'
                        sx={{
                            padding: "0.8rem 0",
                            backgroundColor: "#9155FD"
                        }}

                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className=' py-3 flex items-center'>
                <p>
                    Don't have an Account ?
                </p>
                <Button onClick={() => navigate("/register")} className='ml-5' size ='small'>Register</Button>
            </div>
        </div>
    </div>
  )
}

export default Login;