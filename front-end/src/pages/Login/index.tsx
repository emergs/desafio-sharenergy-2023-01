import { Box, Button, Container, FormGroup, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/providers/UserProvider'

const Login = () => {

  const { login } = useContext(UserContext)

  const [username, setUser] = useState<string>('')
  const [password, setPass] = useState<string>('')
  // const [remember, setRemember] = useState<string>('false')


  return (
    <Container maxWidth="sm" sx={{
      flex: 'center',
    }}>
      <Box sx={{
        height: 400,
        border: 0.2,
        borderColor: 'firebrick',
        marginTop: 10,
      }}>
        <FormGroup>
          <TextField
            sx={{
              marginTop: 5,
              width: 400
            }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(event) => setUser(event.target.value)}
          />
          <TextField
            sx={{
              marginTop: 5,
              width: 400,
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={'password'}
            onChange={(event) => setPass(event.target.value)}
          />
          {/* <FormControlLabel
            sx={{ marginTop: 5 }}
            control={
              <Checkbox
                defaultChecked
                color='secondary'
                onChange={(event) => setRemember(event.target.value)}
                value={remember}
              />}
            label="Remember Me"
          /> */}
          <Button
            variant="contained"
            onClick={() => login({ username, password })
            }
          >Login</Button>
        </FormGroup>
      </Box>
    </Container >
  )
}

export default Login