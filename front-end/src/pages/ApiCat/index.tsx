import { Button, TextField } from "@mui/material"
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
      <TextField
        id="outlined-basic"
        label="Digite o status-code"
        variant="outlined"
        value={statusCode}
        onChange={(e) => setStatusCode(e.target.value)}
      />
      <Button variant="contained" onClick={(event) => getDataCat(event)}>Enviar</Button>
      <img src={''} alt="status code cat api" />
    </Body>

  )
}

export default ApiCat