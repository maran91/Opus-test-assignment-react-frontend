import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import axiosClient from "../axios-client.js";


export default function DefaultLayout() {
    const {token, setToken} = useStateContext();
    if (!token) {
        return <Navigate to="/login"/>
    }
    const onLogout = (event) => {
        event.preventDefault()

        axiosClient.post('/logout')
            .then(() => {
                setToken(null)
            })
    }

    return (
        <div id="default-layout">
            <aside>
                <Link to="/import">Import Wordbase</Link>
                <Link to="/anagrams">Anagrams</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        <a href="#" onClick={onLogout} className="btn btn-menu">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}


