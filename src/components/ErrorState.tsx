import { Paper, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

function ErrorState() { 
    return (
        <Paper
            elevation={3} 
            sx={{ 
                padding: '20px',
                margin: {sm: '20px 100px', xs: '0px'},
                backgroundColor: '#f6f6ef',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '500px',
                gap: '20px',
            }}
        >
            <WarningIcon color="error" fontSize="large" />
            <Typography variant="h6" color="error" align="center">
                There was a problem fetching the data. 
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                Please try again.
            </Typography>
        </Paper>
    );
}

export default ErrorState;