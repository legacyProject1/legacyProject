"use client"

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SellerNavbar from '../../SellerNavbar/page';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface ProfileProps {}

const defaultTheme = createTheme();

const Profile: React.FC<ProfileProps> = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [userid, setUserId] = useState<string>('');

  useEffect(() => {
    const token = Cookies.get('token');
    const userId = Cookies.get('userId');
    const email = Cookies.get('email');
    const password = Cookies.get('password');
    const firstName = Cookies.get('firstName');
    const lastName = Cookies.get('lastName');
    const adress = Cookies.get('adress');

    if (token && userId) {
      setUserId(userId);
      setFirstName(firstName);
      setLastName(lastName);
      setAdress(adress);
      setCurrentPassword(password);
      setEmail(email);
    } else {
      console.log('User is not authenticated');
    }
  }, []);

  const modifyProfile = (user: {
    email: string;
    newPassword: string;
    currentPassword: string;
    firstName: string;
    lastName: string;
    adress: string;
  }) => {

    if (user.newPassword.length < 8) {
      alert('Enter a strong password: ');
      return;
    } else {
      axios
        .post('http://localhost:3000/seller/UpdateProfile', user)
        .then((res) => {
          console.log(res.data, 'res');
          alert('You successfully updated your account');
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <SellerNavbar />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
              Update Profile
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {/* ... (rest of the code remains unchanged) */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() =>
                  modifyProfile({
                    email: email,
                    newPassword: newPassword,
                    currentPassword: currentPassword,
                    firstName: firstName,
                    lastName: lastName,
                    adress: adress,
                  })
                }
              >
                Update
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Profile;
