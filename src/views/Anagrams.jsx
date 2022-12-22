import {useRef, useState} from "react";
import axiosClient from "../axios-client.js";

export default function Anagrams() {
    const [anagrams, setAnagrams] = useState([]);
    const wordRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault()
        if (wordRef.current.value !== '') {
            axiosClient.get("/anagrams/" + wordRef.current.value)
                .then(({data}) => {
                    setAnagrams(data);
                })
        }
    }

    return (
        <div>
            <div>
                <h1>Anagrams</h1>
                <form onSubmit={onSubmit}>
                    <input ref={wordRef} type="text"
                           placeholder="Search for anagrams"/>
                    <button className="btn btn-menu">Find</button>
                </form>
            </div>
            <div className="card">
                {anagrams.map(value => (
                    <p key={anagrams.indexOf(value)}>
                        {value}
                    </p>
                ))}
            </div>
        </div>
    )
}

