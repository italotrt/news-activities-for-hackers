import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItemIcon, ListItemText, Button, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
            <AppBar position='sticky' style={{ backgroundColor: '#ff6600'}}>
                <Toolbar style={{ justifyContent:'space-between'}}>
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        style={{ marginRight: '10px'}}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography fontWeight="bold" variant="h5" color='black'>
                        Hacker News
                    </Typography>

                    <Button style={{ color:'black' }} endIcon={<AccountBoxIcon />} >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer 
                anchor="left" 
                open={drawerOpen} 
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: { width: 200 },
                }}
            >
                <List>
                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Guidelines" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText primary="FAQ" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lists" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary="API" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <SecurityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Security" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <PolicyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Legal" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Apply to YC" />
                    </ListItemButton>

                    <ListItemButton onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}