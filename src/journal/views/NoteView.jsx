import {Button, Grid2, TextField, Typography} from "@mui/material";
import {SaveOutlined} from "@mui/icons-material";
import {ImageGallery} from "../components";

export const NoteView = () => {
    const date = new Date();

    return (
        <>
            <Grid2 container direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}}>
                <Grid2>
                    <Typography fontSize={39} fontWeight="light">
                        {date?.toDateString()}
                    </Typography>
                </Grid2>
                <Grid2>
                    <Button color="primary" sx={{p: 2}}>
                        <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                        Save
                    </Button>
                </Grid2>
            </Grid2>
            <Grid2 container spacing={2}>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label={"Title"}
                    sx={{border: "none", mb: 1}}
                >
                </TextField>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Write your journal"
                    label={"What happened today?"}
                    minRows={5}
                    sx={{border: "none", mb: 1}}
                >
                </TextField>
            </Grid2>
            <ImageGallery/>
        </>
    )
}