import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';

import { useState } from 'react';

export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar position='sticky' sx={{ bgcolor: '#ff6600'}}>
                <Toolbar>
                    <IconButton 
                        edge="start"
                        aria-label="menu"
                        style={{ marginRight: '10px'}}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography fontWeight="bold" variant="h5" style={{ color: 'black'}}>
                        Hacker News
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer 
                anchor="left" 
                open={drawerOpen} 
                onClose={handleDrawerClose}
            >
                <List>
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Guidelines" />
                    </ListItem>

                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText primary="FAQ" />
                    </ListItem>

                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lists" />
                    </ListItem>

                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary="API" />
                    </ListItem>

                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <SecurityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Security" />
                    </ListItem>

                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <PolicyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Legal" />
                    </ListItem>

                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Apply to YC" />
                    </ListItem>
                    
                    <ListItem onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}