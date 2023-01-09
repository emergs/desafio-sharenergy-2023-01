import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CrudContext } from "../contexts/providers/CrudProvider";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const EditCustomerModal = () => {

  const { createNewCustomer, handleClose, modalEdition, oneCustomer } = useContext(CrudContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [cpf, setCpf] = useState('')

  const register = () => {
    console.log({ name, email, phone, address, cpf })
    handleClose()
  }

  return (
    <Modal
      open={modalEdition}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Editar Usuário
        </Typography>
        <Button onClick={() => handleClose()}>Close</Button>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Nome"
          variant="outlined"
          value={name}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          value={email}
        />
        <TextField
          onChange={(e) => setPhone(e.target.value)}
          label="Telefone"
          variant="outlined"
          value={phone}
        />
        <TextField
          onChange={(e) => setAddress(e.target.value)}
          label="Endereço"
          variant="outlined"
          value={address}
        />
        <TextField
          onChange={(e) => setCpf(e.target.value)}
          label="CPF"
          variant="outlined"
          defaultValue={oneCustomer.cpf}
          value={cpf}
        />
        <Button onClick={() => register()}>Salvar</Button>
      </Box>
    </Modal>
  )
}

export default EditCustomerModal