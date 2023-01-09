import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect } from "react";
import Body from "../../components/Body"
import RegisterCustomerModal from "../../components/RegisterCustomerModal";
import { CrudContext } from "../../contexts/providers/CrudProvider";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EditCustomerModal from "../../components/EditCustomerModal";


const Crud = () => {
  const { customers, getAllCustomers, deleteCustomer, updateCustomer, oneCustomer, listCustomerForId, handleOpen } = useContext(CrudContext)

  useEffect(() => {
    getAllCustomers()
  }, [])

  const getDataCustomer = (id: any) => {
    handleOpen()
    listCustomerForId(id)
  }

  return (

    <Body>
      <EditCustomerModal />
      <RegisterCustomerModal />
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.map((row: any) => (
              <TableRow
                key={row.name}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.phone}</TableCell>
                <TableCell >{row.address}</TableCell>
                <TableCell >{row.cpf}</TableCell>
                <TableCell >
                  <Button id={row._id} onClick={(e: any) => deleteCustomer(e.target.id)} >
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
                <TableCell >
                  <Button id={row._id} onClick={(e: any) => getDataCustomer(e.target.id)} >
                    EDITAR
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Body >
  )
}

export default Crud