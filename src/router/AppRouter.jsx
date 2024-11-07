import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";
import {JournalRoutes} from "../journal/routes/JournalRoutes.jsx";

export const AppRouter = [
    {
        path: "/auth/*",
        children: AuthRoutes,
    },
    {
        path: "/",
        children: JournalRoutes,
    },
];