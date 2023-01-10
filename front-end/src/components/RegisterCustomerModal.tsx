import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CrudContext } from "../contexts/providers/CrudProvider";
import { styleBoxModal, styleModal } from "./EditCustomerModal";


const RegisterCustomerModal = () => {

  const { createNewCustomer, getAllCustomers } = useContext(CrudContext)

  const [modalStatus, setModalStatus] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [cpf, setCpf] = useState('')

  const handleOpen = () => setModalStatus(true);
  const handleClose = () => setModalStatus(false);

  const register = () => {
    createNewCustomer({ name, email, phone, address, cpf })
    handleClose()
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          sx={{ marginTop: '5%', marginBottom: '5%' }}
          variant='contained'
          onClick={handleOpen}>
          Novo Cliente
        </Button>
      </Box>
      <Modal
        open={modalStatus}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styleModal}
      >
        <Box sx={styleBoxModal}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cadastro de Usuário
            </Typography>
            <Button onClick={() => handleClose()}>Close</Button>
          </Box>
          <TextField onChange={(e) => setName(e.target.value)} label="Nome" variant="outlined" />
          <TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
          <TextField onChange={(e) => setPhone(e.target.value)} label="Telefone" variant="outlined" />
          <TextField onChange={(e) => setAddress(e.target.value)} label="Endereço" variant="outlined" />
          <TextField onChange={(e) => setCpf(e.target.value)} label="CPF" variant="outlined" />
          <Button onClick={() => register()}>Cadastrar</Button>
        </Box>
      </Modal>
    </>
  )
}

export default RegisterCustomerModal