
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from '../data/data';
import { columns } from '../data/data';
import Button from '../components/Button';
import { GoPlusCircle } from "react-icons/go";
import Breadcrumb from '../components/Breadcrumb';
import { useEffect } from 'react';

export default function DataGridDemo() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
   <div className='mx-4 lg:mx-16 my-8 md:mx-10'>
    <Breadcrumb/>
    <div className='flex'>
    <h1 className='ibm-plex-sans-condensed-semibold text-white text-3xl flex-1 mt-3 mb-2'>Members</h1>
   <Button type='Add New' className='button-new mx-6 text-sm mt-6 p-2 hover:scale-95 cursor-pointer' icon={<GoPlusCircle/>}/>
    </div>
   </div>
    <Box sx={{ height: 600, width: '100%', marginTop:'30px' }}>
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
    </>
  );
}