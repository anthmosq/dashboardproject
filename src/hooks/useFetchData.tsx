import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

// Estrategia para convertir la opción seleccionada en un objeto
const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  'Guayaquil': { latitude: -2.1962, longitude: -79.8862 },
  'Quito': { latitude: -0.180653, longitude: -78.467838 },
  'Manta': { latitude: -0.962322, longitude: -80.7124 },
  'Cuenca': { latitude: -2.900128, longitude: -79.0046 },
};

// Tipo del prop: string | null
export default function useFetchData(selectedOption: string | null): OpenMeteoResponse | null {
  const [data, setData] = useState<OpenMeteoResponse | null>(null);

  useEffect(() => {
    // Parametrice la opción seleccionada en la URL del requerimiento asíncrono
    const cityConfig = selectedOption != null ? CITY_COORDS[selectedOption] : CITY_COORDS['Guayaquil'];
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain,wind_speed_10m`;

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        const jsonData: OpenMeteoResponse = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos climáticos:', error);
      }
    };

    fetchData();
  }, [selectedOption]); // El efecto secundario depende de la opción seleccionada

  return data;
}