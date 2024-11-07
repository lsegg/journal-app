import {Link as RouterLink} from "react-router-dom";
import {Google, Login} from '@mui/icons-material';
import {Button, Grid2, Link, TextField, Typography} from "@mui/material";
import {AuthLayout} from "../layout/AuthLayout.jsx";

export const LoginPage = () => {
    return (
        <AuthLayout title={"Login"}>
            <form>
                <Grid2 container spacing={1}>
                    <Grid2 size={{sm: 12, md: 12, lg: 6}} sx={{mt: 2}}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            placeholder="jane@doe.com"
                            type="email"
                            variant="outlined"
                        />
                    </Grid2>
                    <Grid2 size={{sm: 12, md: 12, lg: 6}} sx={{mt: 2}}>
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            placeholder="password"
                            type="password"
                            variant="outlined"
                        />
                    </Grid2>

                    <Grid2 container size={12} spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid2 size={{xs: 12, sm: 12, md: 6}}>
                            <Button variant="contained" fullWidth>
                                <Login/>
                                <Typography sx={{ml: 1}}>Login</Typography>
                            </Button>
                        </Grid2>
                        <Grid2 size={{xs: 12, sm: 12, md: 6}}>
                            <Button variant="contained" fullWidth>
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction="row" justifyContent="end" size={12}>
                        <Link color="inherit" component={RouterLink} to="/auth/register">
                            Create an account
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
};