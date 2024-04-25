
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from '../data/data';
import { columns } from '../data/data';



export default function DataGridDemo() {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}