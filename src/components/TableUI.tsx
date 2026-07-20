import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

type TableUIProps = {
   data: OpenMeteoResponse | null;
};

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'time',
      headerName: 'Hora',
      width: 140,
   },
   {
      field: 'temperature',
      headerName: 'Temperatura (°C)',
      width: 150,
   },
   {
      field: 'humidity',
      headerName: 'Humedad (%)',
      width: 150,
   },
   {
      field: 'rain',
      headerName: 'Lluvia (mm)',
      width: 150,
   },
];

export default function TableUI({ data }: TableUIProps) {
   const hourlyData = data?.hourly;

   const rows = (hourlyData?.time ?? []).slice(0, 7).map((time, index) => ({
      id: index,
      time: time.slice(11, 16),
      temperature: hourlyData?.temperature_2m[index] ?? 0,
      humidity: hourlyData?.relative_humidity_2m[index] ?? 0,
      rain: hourlyData?.rain[index] ?? 0,
   }));

   return (
      <Box sx={{ height: 350, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}