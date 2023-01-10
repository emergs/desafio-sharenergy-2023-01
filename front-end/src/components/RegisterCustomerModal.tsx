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
      <Box sx={{display:'flex', justifyContent:'flex-end'}}>
        <Button 
          sx={{marginTop:'5%', marginBottom:'5%'}} 
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
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cadastro de Usuário
          </Typography>
          <Button onClick={() => handleClose()}>Close</Button>
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