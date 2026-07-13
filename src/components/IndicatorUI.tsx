import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

interface IndicatorUIProps {
    title?: string;
    description?: string;
    loading?: boolean;
}

export default function IndicatorUI({ title, description, loading = false }: IndicatorUIProps) {
    return (
        <Card sx={{ minHeight: 120 }}>
            <CardContent sx={{ height: '100%', position: 'relative' }}>
                {loading ? (
                    // Reemplazamos Box por un div estándar con Flexbox para centrar
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        minHeight: '64px' 
                    }}>
                        <CircularProgress size={30} />
                    </div>
                ) : (
                    <>
                        <Typography variant="h5" component="div">
                            {description}
                        </Typography>
                        <Typography variant="body2" component="p" color="text.secondary">
                            {title}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
}