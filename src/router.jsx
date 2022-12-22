import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup.jsx";
import Anagrams from "./views/Anagrams.jsx";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Import from "./views/Import.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/anagrams'}/>
            },
            {
                path: '/anagrams',
                element: <Anagrams/>
            },
            {
                path: '/import',
                element: <Import/>
            },
        ]
    }, {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;
