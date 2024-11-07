import {JournalPage} from "../pages/JournalPage.jsx";
import {Navigate} from "react-router-dom";

export const JournalRoutes = [
    {
        index: true,
        element: <JournalPage/>,
    },
    {
        path: "/*",
        element: <Navigate to={"/"}/>,
    },
];