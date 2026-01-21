import { Button, ButtonGroup, Divider, List, ListItem, Paper, Typography, Link, IconButton, Pagination } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';

function Posts() {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f6f6ef' }}>
        <ButtonGroup variant="text" style={{ marginBottom: '20px' }}>
            <Typography fontWeight="bold" style={{ margin: '10px 10px 10px 0' }}>Posts:</Typography>
            <Button variant="text">New</Button>
            <Button variant="text">Top</Button>
        </ButtonGroup>

        <Divider/>

        <List>
            <ListItem style={{ gap: '10px' }}>        
                <AccountCircleIcon/>
                <Link href="#" variant="body2" color="textSecondary" underline="none">
                    username
                </Link>
                <Typography variant="body2" color="textSecondary" display="inline">
                    • 1 hour ago
                </Typography>
            </ListItem>

            <ListItem>
                <Link href="#" variant="h6" color="textPrimary" underline="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend aliquam semper. Nullam luctus, enim porta tristique aliquet, magna diam interdum sapien, non imperdiet eros diam in tortor. Nunc pellentesque laoreet tempus. Duis porta nulla sit amet vehicula feugiat. Nam a eros vitae dui finibus ultrices a quis lectus.
                </Link>
            </ListItem>

            <ListItem style={{ gap: '10px' }}>
                <IconButton aria-label="upvote" color="primary" size='small'>
                    <ArrowCircleUp />
                </IconButton>
                <Typography color='textSecondary' variant="body2">
                    100
                </Typography>
                <IconButton aria-label="downvote" color="secondary" size='small'>
                    <ArrowCircleDown />
                </IconButton>
                <Button size="small" variant='text'>100 Comments</Button>
                <Button size="small" variant='text'>Share</Button>
                <Button size="small" variant='text'>Save</Button>
            </ListItem>
        </List>
            
        <Divider/>

        <Pagination count={10} color="primary" style={{ marginTop: '20px'}}/>
    </Paper>
    )
}

export default Posts