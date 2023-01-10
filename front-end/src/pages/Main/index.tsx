import { useEffect, useState } from "react";
import { apiUsers } from "../../services/api";
import PaginationComp from "../../components/Pagination";
import ListUsers from "../../components/ListUsers";
import Body from "../../components/Body";
import { Container } from "@mui/material";

const Main = () => {

  const [dataUsers, setDataUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    apiUsers.get('/?page=1&results=10&seed=abc')
      .then((response) => {
        setLoading(true)
        setDataUsers(response.data.results)
        setLoading(false)
      })
  }, [])

  const pagination = (page: number) => {
    apiUsers.get(`/?page=${page}&results=10&seed=abc`)
      .then((response) => {
        setLoading(true)
        setDataUsers(response.data.results)
        setLoading(false)
      })
  }

  return (
    <Body>
      <Container sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:2
      }}>
        <ListUsers dataUsers={dataUsers} loading={loading}/>
        <PaginationComp pagination={pagination} />
      </Container>
    </Body>
  )
}

export default Main