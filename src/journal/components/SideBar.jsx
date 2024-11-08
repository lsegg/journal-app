import PropTypes from 'prop-types';
import {
    Box,
    Divider,
    Drawer,
    Grid2,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

export const SideBar = ({drawerWidth}) => {
    return (
        <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs: "block"},
                    '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWidth },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">Jane Doe</Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {["January", "February", "March", "April", "May"].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={"Accusamus error fuga ipsum iusto laudantium, optio pariatur perferendis porro."} />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired,
};