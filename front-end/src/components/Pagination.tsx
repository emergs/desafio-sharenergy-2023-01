import { Pagination } from "@mui/material";

const PaginationComp = ({ pagination }: any) => {

  return (
    <Pagination
      count={10}
      color="primary"
      onChange={(event, page) => pagination(page)}
    />
  )
}

export default PaginationComp