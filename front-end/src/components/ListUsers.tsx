import ImageIcon from '@mui/icons-material/Image';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface IDataUser {
  dataUsers: any
  loading: boolean
}

const ListUsers = ({ dataUsers, loading }: IDataUser): any => {
  if (loading) {
    return (<h2>Loading...</h2>)
  }

  return (
    <>
      {
        dataUsers?.map((elem: any) => {
          return (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <ListItem>
                <ListItemAvatar sx={{ width: '10%' }}>
                  <Avatar alt={elem.login.username} src={elem.picture.thumbnail} />
                </ListItemAvatar>
                <ListItemText sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography>Nome: {elem.name.title + " " + elem.name.first + " " + elem.name.last}</Typography>
                  <Typography>Email: {elem.email}</Typography>
                </ListItemText>
                <ListItemText sx={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography>Username: {elem.login.username}</Typography>
                  <Typography>Idade: {elem.dob.age}</Typography>
                </ListItemText>
              </ListItem>
            </List>
          )
        })
      }
    </>
  )

}

export default ListUsers