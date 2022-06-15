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
                <img id="img_principal" src={Data.url}/>
                <div id="about">
                    <h1>{Data.title}</h1>
                    
                    
                    <p>{Data.explanation}</p>
                    <div id="copyright">
                        <h3>{Data.copyright}</h3>
                        <p>{Data.date}</p>
                    </div>
                    
                </div>
               
            </main>
            <footer>
                <a href="https://github.com/guilherme-tavares-py" class="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/guilherme-tavares-pinheiro-21510b1b1/" class="fa fa-linkedin"></a>
            </footer>
        </div>
    )

}