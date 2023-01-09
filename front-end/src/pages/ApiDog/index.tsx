import { Button, Card, CardMedia } from "@mui/material"
import { useContext } from "react"
import Body from "../../components/Body"
import { ApiDogContext } from "../../contexts/providers/ApiDogProviders"

const ApiDog = () => {
  const { refreshImg, randomImage } = useContext(ApiDogContext)
  return (
    <Body>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{
            width: 400,
            height: 400
          }}
          image={randomImage}
        />
      </Card>
      <Button onClick={() => refreshImg()}>Próximo</Button>
    </Body>

  )
}

export default ApiDog