import { Button, ButtonGroup } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Menu = () => {
  const navigate = useNavigate()

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div>
        <Button onClick={() => navigate('../main', { replace: true })}>Home</Button>
        <Button onClick={() => navigate('../apidog', { replace: true })}>Api Dog</Button>
        <Button onClick={() => navigate('../apicat', { replace: true })}>Api Cat</Button>
        <Button onClick={() => navigate('../crud', { replace: true })}>Crud</Button>
      </div>
      <div>
        <Button onClick={() => navigate('../login', { replace: true })}>Sair</Button>
      </div>
    </ButtonGroup>
  )
}

export default Menu