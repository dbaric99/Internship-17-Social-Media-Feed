import { TextField, Button, FormControl } from '@mui/material';
import { localStorageHelper } from 'helpers';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <FormControl className={styles.loginForm}>
      <h1>Log in</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" className={styles.inputField}/>
      <TextField id="outlined-basic" label="Password" type="password" variant="outlined" className={styles.inputField} />
      <Button variant="contained">Log in</Button>
    </FormControl>
  )
}

export {LoginPage}