import {useState} from "react";
import axiosClient from "../axios-client.js";

export default function Anagrams() {
    const [wordbase, setWordbase] = useState('');

    const onSubmit = (event) => {
        event.preventDefault()

        axiosClient.get("/words/import")
            .then(({data}) => {
                setWordbase(data.message)
            })
    }

    return (
        <div>
            <div>
                <h1>Import Wordbase</h1>
                <form onSubmit={onSubmit}>
                    <button className="btn btn-menu">Import</button>
                </form>
                <p>{wordbase}</p>
            </div>
        </div>
    )
}
