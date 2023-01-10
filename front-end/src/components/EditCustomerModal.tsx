import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CrudContext } from "../contexts/providers/CrudProvider";

export const styleBoxModal = {
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: 2
};

export const styleModal = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const EditCustomerModal = () => {

  const { createNewCustomer, handleClose, modalEdition, oneCustomer } = useContext(CrudContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [cpf, setCpf] = useState('')

  const register = async () => {
    console.log({ name, email, phone, address, cpf })
    handleClose()
    if (cpf == '') {
      setCpf(oneCustomer.cpf)
    }
    await console.log({ name, email, phone, address, cpf })
  }

  return (
    <Modal
      open={modalEdition}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={styleModal}
    >
      <Box sx={styleBoxModal}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Usuário
          </Typography>
          <Button onClick={() => handleClose()}>Close</Button>
        </Box>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Nome"
          variant="outlined"
          value={name == '' ? oneCustomer.name : name}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          value={email == '' ? oneCustomer.email : email}
        />
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          label="Telefone"
          variant="outlined"
          value={phone == '' ? oneCustomer.phone : phone}
        />
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          label="Endereço"
          variant="outlined"
          value={address == '' ? oneCustomer.address : address}
        />
        <TextField
          onChange={(e) => setCpf(e.target.value)}
          label="CPF"
          variant="outlined"
          value={cpf == '' ? oneCustomer.cpf : cpf}
        />
        <Button onClick={() => register()}>Salvar</Button>
      </Box>
    </Modal>
  )
}

export default EditCustomerModal