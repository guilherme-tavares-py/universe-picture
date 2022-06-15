import React, { useState, useEffect } from 'react'

export default function UsersData() {
    const [Data, fetchData] = useState([])
    const getData = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then((res) => res.json())
        .then((res) => {
            fetchData(res)
        })
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <div>
            <main>
                <img src={Data.url}/>
                <h1>{Data.title}</h1>
                <h3>{Data.copyright}</h3>
                <p>{Data.date}</p>
                <p>{Data.explanation}</p>
            </main>
            <footer>
                <smaill>Guilherme</smaill>
            </footer>
        </div>
    )

}