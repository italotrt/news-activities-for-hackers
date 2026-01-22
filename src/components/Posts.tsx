import { Button, ButtonGroup, Divider, List, ListItem, Paper, Typography, Link, IconButton, Pagination } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PostsLoading from './PostsLoading';

function Posts() {
    const [displayType, setDisplayType] = useState<'topstories' | 'newstories'>('topstories');
    const postsPerPage = 10;

    const fetchPosts = async () => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/${displayType}.json`);
        const topStoriesIDs = await response.json();

        const postData = await Promise.all(topStoriesIDs.slice(0, postsPerPage).map(async (id: number) => {
            const postResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return postResponse.json();
        }));
        return postData;
    }

    const { data: postData = [], isLoading } = useQuery({
        queryKey: ['stories', displayType],
        queryFn: fetchPosts,
    });

    if (isLoading) {
        return (
            <PostsLoading />
        );
    }

    const handleDisplayTypeChange = (type: 'topstories' | 'newstories') => {
        setDisplayType(type);
    }

    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {

    }

    const handleTime = (timestamp: number) => {
        const now = Date.now();
        const postTime = timestamp * 1000;
        const difference = now - postTime;

        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }


  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f6f6ef' }}>
        <ButtonGroup variant="text" style={{ marginBottom: '20px' }}>
            <Typography fontWeight="bold" style={{ margin: '10px 10px 10px 0' }}>
                Show by:
            </Typography>

            <Button variant="text" onClick={() => handleDisplayTypeChange('newstories')}>
                New Posts
            </Button>

            <Button variant="text" onClick={() => handleDisplayTypeChange('topstories')}>
                Top Posts
            </Button>
        </ButtonGroup>

        <Divider/>

        {postData.map((post) => (
            <List key={post.id}>
                <ListItem style={{ gap: '10px' }}>        
                    <AccountCircleIcon/>
                    <Link href="#" variant="body2" color="textSecondary" underline="none">
                        {post.by}
                    </Link>
                    <Typography variant="body2" color="textSecondary" display="inline">
                        •
                    </Typography>
                    <Typography variant="body2" color="textSecondary" display="inline">
                        {handleTime(post.time)}
                    </Typography>
                </ListItem>

                <ListItem>
                    <Link href={post.url} variant="body1" color="textPrimary" underline="none">
                        {post.title}
                    </Link>
                </ListItem>

                <ListItem style={{ gap: '10px' }}>
                    <IconButton aria-label="upvote" color="primary" size='small'>
                        <ArrowCircleUp />
                    </IconButton>
                    <Typography color='textSecondary' variant="body2">
                        {post.score}
                    </Typography>
                    <IconButton aria-label="downvote" color="secondary" size='small'>
                        <ArrowCircleDown />
                    </IconButton>
                    <Button size="small" variant='text'>{post.descendants} Comments</Button>
                    <Button size="small" variant='text'>Share</Button>
                    <Button size="small" variant='text'>Save</Button>
                </ListItem>
                <Divider/>
            </List>
        ))}

        <Pagination count={10} color="primary" style={{ marginTop: '10px'}} onChange={handlePagination} />
    </Paper>
    )
}

export default Posts