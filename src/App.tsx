import './App.css';
import HeaderUI from './components/HeaderUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';

import { Grid } from '@mui/material';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {
   // Obtenemos los datos del hook personalizado
   const dataFetcherOutput = useFetchData();

   // Si dataFetcherOutput tiene una propiedad 'loading', úsala. 
   // Si no la tiene, asumimos que está cargando mientras 'current' no exista.
   const isLoading = dataFetcherOutput?.loading ?? !dataFetcherOutput?.current;

   return (
      <Grid container spacing={5} sx={{ justifyContent: "left", alignItems: "center" }}>

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }}>
            Elemento: Encabezado
            <HeaderUI />
         </Grid>

         {/* Alertas */}
         <Grid size={{ xs: 12, md: 3 }}>
            Elemento: Alertas
         </Grid>  
         <Grid container sx={{ justifyContent: "right", alignItems: "center" }}>
             <AlertUI description="No se prevén lluvias" />
         </Grid>

         {/* Selector */}
         <Grid size={{ xs: 12, md: 9 }}>
            Elemento: Selector
         </Grid>
         <SelectorUI />

         {/* Indicadores */}
         <Grid size={{ xs: 12, md: 12 }}>
            Elemento: Indicadores
            
            <Grid container spacing={2}>
                
               {/* 1. Temperatura (2m) */}
               <Grid size={{ xs: 12, md: 3 }}>
                  <IndicatorUI
                     title='Temperatura (2m)'
                     loading={isLoading}
                     description={
                        dataFetcherOutput?.current && dataFetcherOutput?.current_units
                           ? `${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`
                           : ""
                     } 
                  />
               </Grid>

               {/* 2. Temperatura Aparente */}
               <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <IndicatorUI 
                     title='Temperatura aparente' 
                     loading={isLoading}
                     description={
                        dataFetcherOutput?.current && dataFetcherOutput?.current_units
                           ? `${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`
                           : ""
                     } 
                  />
               </Grid>

               {/* 3. Velocidad del Viento */}
               <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <IndicatorUI 
                     title='Velocidad del viento' 
                     loading={isLoading}
                     description={
                        dataFetcherOutput?.current && dataFetcherOutput?.current_units
                           ? `${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`
                           : ""
                     } 
                  />
               </Grid>

               {/* 4. Humedad Relativa */}
               <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <IndicatorUI 
                     title='Humedad relativa' 
                     loading={isLoading}
                     description={
                        dataFetcherOutput?.current && dataFetcherOutput?.current_units
                           ? `${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`
                           : ""
                     } 
                  />
               </Grid>

            </Grid>
         </Grid>

         {/* Gráfico */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>
            Elemento: Gráfico
         </Grid>

         {/* Tabla */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>
            Elemento: Tabla
         </Grid>

         {/* Información adicional */}
         <Grid size={{ xs: 12, md: 12 }}>
            Elemento: Información adicional
         </Grid>
      </Grid>
   );
}

export default App;