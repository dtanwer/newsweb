import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import SearchList from './SearchList'
import word from '../api/word.json'
export default function SearchBar() {

    const router = useRouter();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        const results = word.words.filter((user) => {
            return (
                value &&
                user &&
                user &&
                user.toLowerCase().includes(value)
            );
        });
            setResults(results);
            console.log(results);
    };

    const handelchange = (event) => {
        setInput(event.target.value);
        fetchData(event.target.value);
        setSearch(event.target.value);
    }
    const sendData = () => {
        
        router.push(
            {
                pathname: '/readmore',
                query: { search }
            }
            )
            setSearch("");
            setResults([]);
    }
    return (
        <div className='container text-center '>
            <div className="input-group">
                <div className="form-outline me-2">
                    <input type="search" id="form1" value={search} onChange={handelchange} className="form-control" />
                </div>
                <button onClick={sendData} type="button" className="btn btn-danger">
                <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
            </div>
            <div className="results-list ">
                {results.map((result, id) => {
                    return <SearchList result={result} setSearch={setSearch} key={id} />;
                })}
            </div>
        </div>
    )
}
