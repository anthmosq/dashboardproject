import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData(): OpenMeteoResponse | null {
    // URL CORREGIDA: Agregados los parámetros &current y &current_units para que coincida con tu App.tsx
    const URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.2144113&longitude=-79.872314&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain,wind_speed_10m';

    const [data, setData] = useState<OpenMeteoResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.status}`);
                }
                const jsonData: OpenMeteoResponse = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error al obtener los datos climáticos:", error);
            }
        };

        fetchData();
    }, []);

    return data;
}