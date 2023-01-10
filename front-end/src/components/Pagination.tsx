import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

const PaginationComp = ({ pagination }: any) => {

  return (
    <Box sx={{marginBottom: '10%', marginTop:'5%'}}>
      <Pagination
        count={10}
        color="primary"
        onChange={(event, page) => pagination(page)}
      />
    </Box>
  )
}

export default PaginationComp