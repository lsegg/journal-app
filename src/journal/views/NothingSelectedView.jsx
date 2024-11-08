import {Grid2, Typography} from "@mui/material";
import {StarOutline} from "@mui/icons-material";

export const NothingSelectedView = () => {
    return (
        <Grid2
            alignItems="center"
            container
            direction="column"
            justifyContent="center"
            spacing={0}
            sx={{minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main"}}
        >
            <Grid2 item xs={12}>
                <StarOutline sx={{fontSize: 100, color: "white"}}/>
            </Grid2>
            <Grid2 item xs={12}>
                <Typography color="white">Select or create an entry</Typography>
            </Grid2>
        </Grid2>
    )
}