import { Box, Button, Card, CardMedia } from "@mui/material"
import { flexbox } from "@mui/system"
import { useContext } from "react"
import Body from "../../components/Body"
import { ApiDogContext } from "../../contexts/providers/ApiDogProviders"

const ApiDog = () => {
  const { refreshImg, randomImage } = useContext(ApiDogContext)
  return (
    <Body >
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:2
      }}>
      <Card sx={{ maxWidth: 400, marginTop: '20%' }}>
        <CardMedia
          sx={{
            width: 400,
            height: 400
          }}
          image={randomImage}
          />
      </Card>
      <Button variant='contained' onClick={() => refreshImg()}>Próximo</Button>
      </Box>
    </Body>

  )
}

export default ApiDog