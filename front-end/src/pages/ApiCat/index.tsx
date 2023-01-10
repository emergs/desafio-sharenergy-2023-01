import { Box, Button, Container, TextField } from "@mui/material"
import { useState } from "react"
import Body from "../../components/Body";
import { apiCat } from "../../services/api";

const ApiCat = () => {

  const [newCat, setNewCat] = useState<string>('');
  const [statusCode, setStatusCode] = useState<string>('');

  const getImageCat = async () => {
    try {
      console.log(`/${statusCode}`);
      const request = await apiCat.get(`/${statusCode}`)
      console.log(request)
    } catch (error) {
      console.log(error)
    }
  }

  const getDataCat = (event: any) => {
    event.preventDefault()
    getImageCat()
  }

  return (
    <Body>
      <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
        <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <img src={''} alt="status code cat api" />
          <TextField
            id="outlined-basic"
            label="Digite o status-code"
            variant="outlined"
            value={statusCode}
            onChange={(e) => setStatusCode(e.target.value)}
          />
          <Button variant="contained" onClick={(event) => getDataCat(event)}>Enviar</Button>
        </Box>
      </Container>
    </Body>

  )
}

export default ApiCat