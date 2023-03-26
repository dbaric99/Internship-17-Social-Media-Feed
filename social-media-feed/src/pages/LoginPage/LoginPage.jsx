import { TextField, Button, FormControl } from '@mui/material';
import { localStorageHelper } from 'helpers';
import {timeUtil} from 'utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState(localStorageHelper.getFromLocalStorage('user'));

  function handleFormSubmit() {
    if(user.username === username && user.password === password) {
      let updatedUser = {...user, loginCap:timeUtil.calculateLoginCap(12).toISOString()};
      setUser(updatedUser);
      localStorageHelper.setToLocalStorage('user', user);
    }
  }

  useEffect(() => {
    if(user.loginCap && new Date(user.loginCap) > new Date()) navigate("/posts");
  }, [user])

  return (
    <FormControl className={styles.loginForm}>
      <h1>Log in</h1>
      <TextField label="Username" variant="outlined" className={styles.inputField} onChange={(e) => setUsername(e.target.value)}/>
      <TextField label="Password" type="password" variant="outlined" className={styles.inputField} onChange={(e) => setPassword(e.target.value)}/>
      <Button variant="contained" onClick={handleFormSubmit}>Log in</Button>
    </FormControl>
  )
}

export {LoginPage}