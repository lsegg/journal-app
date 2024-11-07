import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter.jsx";
import {AppTheme} from "./theme";

export const JournalApp = () => {
    const router = createBrowserRouter(AppRouter);
    return (
        <AppTheme>
            <RouterProvider router={router}/>
        </AppTheme>
    )
}





