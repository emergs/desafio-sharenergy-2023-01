import { Box, Container } from "@mui/system"
import { IChildren } from "../interfaces"
import Menu from "./Menu"

const Body = ({ children }: IChildren) => {
  return (
    <Container maxWidth="md"  >
      <Menu />
      <Box sx={{ height: '100vh', width: '100%' }}>
        {children}
      </Box>
    </Container>
  )
}

export default Body