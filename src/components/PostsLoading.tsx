import { Paper, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function PostsLoading() { 
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
            <Typography variant="h6">
                Loading posts...
            </Typography>

            <RefreshIcon fontSize='large'/>
        </Paper>
    );
}

export default PostsLoading;