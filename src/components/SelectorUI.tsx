import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function SelectorUI() {
    const [cityInput, setCityInput] = useState('');

    const handleChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value);
    };

    return (
       <FormControl fullWidth>
          <InputLabel id="city-select-label">Ciudad</InputLabel>
          
          <Select
             labelId="city-select-label"
             id="city-simple-select" 
             value={cityInput} //  CORREGIDO: Ahora usa la variable del estado, no el texto plano
             label="Ciudad"
             onChange={handleChange}
          >
             {/*  CORREGIDO: Añadido value="" para que coincida con el estado inicial */}
             <MenuItem value="" disabled><em>Seleccione una ciudad</em></MenuItem> 
             <MenuItem value={"Guayaquil"}>Guayaquil</MenuItem>
             <MenuItem value={"Quito"}>Quito</MenuItem>
             <MenuItem value={"Manta"}>Manta</MenuItem>
             <MenuItem value={"Cuenca"}>Cuenca</MenuItem>
          </Select>

          {cityInput && (
              <p>
                   Clima en la ciudad de <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}>{cityInput}</span>
              </p>
          )}
       </FormControl>
    );
}