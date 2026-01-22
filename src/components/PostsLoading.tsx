import { Paper, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function PostsLoading() { 
    return (
        <Paper
            elevation={3} 
            style={{ 
                padding: '20px',
                marginTop: '20px',
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