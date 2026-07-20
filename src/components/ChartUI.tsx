import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

type ChartUIProps = {
   data: OpenMeteoResponse | null;
};

export default function ChartUI({ data }: ChartUIProps) {
   const hourlyData = data?.hourly;
   const labels = (hourlyData?.time ?? []).slice(0, 7).map((value) => value.slice(11, 16));
   const temperatureValues = (hourlyData?.temperature_2m ?? []).slice(0, 7);
   const humidityValues = (hourlyData?.relative_humidity_2m ?? []).slice(0, 7);

   return (
      <>
         <Typography variant="h5" component="div">
            Temperatura y humedad
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: temperatureValues, label: 'Temperatura (°C)' },
               { data: humidityValues, label: 'Humedad (%)' },
            ]}
            xAxis={[{ scaleType: 'point', data: labels }]}
         />
      </>
   );
}