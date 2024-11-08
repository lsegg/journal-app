import PropTypes from 'prop-types';
import {AppBar, Grid2, IconButton, Toolbar, Typography} from "@mui/material";
import {LogoutOutlined, MenuOutlined} from "@mui/icons-material";

export const NavBar = ({drawerWidth}) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{mr: 2, display: {sm: "none"}}}
                >
                    <MenuOutlined/>
                </IconButton>
                <Grid2 container direction="row" justifyContent="space-between" alignItems="center" size="grow" spacing={2}>
                    <Typography variant="h5" >Journal App</Typography>
                    <IconButton color="error">
                        <LogoutOutlined/>
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    )
}

NavBar.propTypes = {
    drawerWidth: PropTypes.number.isRequired,
};