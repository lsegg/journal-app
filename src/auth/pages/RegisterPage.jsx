import {Link as RouterLink} from "react-router-dom";
import {AccountCircle} from '@mui/icons-material';
import {Button, Grid2, Link, TextField, Typography} from "@mui/material";
import {AuthLayout} from "../layout/AuthLayout.jsx";

export const RegisterPage = () => {
    return (
        <AuthLayout title={"Register"}>
            <form>
                <Grid2 container spacing={1}>
                    <Grid2 size={{sm: 12, md: 12, lg: 6}} sx={{mt: 2}}>
                        <TextField
                            fullWidth
                            id="name"
                            label="Full name"
                            name="name"
                            placeholder="Jane Doe"
                            type="text"
                            variant="outlined"
                        />
                    </Grid2>
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
                        <Grid2 size={{xs: 12}}>
                            <Button variant="contained" fullWidth>
                                <AccountCircle/>
                                <Typography sx={{ml: 1}}>Create account</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction="row" justifyContent="end" size={12}>
                        <Typography>Already have an account? </Typography>
                        <Link color="inherit" component={RouterLink} to="/auth/login">
                            Login
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
};