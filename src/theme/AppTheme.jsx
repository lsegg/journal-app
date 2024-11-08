import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {purpleTheme} from "./";

export const AppTheme = ({children}) => {
    return(
        <ThemeProvider theme={purpleTheme}>
            <CssBaseline enableColorScheme />
            {children}
        </ThemeProvider>
    )
}

AppTheme.propTypes = {
    children: PropTypes.object.isRequired,
};