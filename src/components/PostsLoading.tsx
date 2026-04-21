import { Box, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function PostsLoading() { 
    return (
        <Box
            sx={{
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
        </Box>
    );
}

export default PostsLoading;