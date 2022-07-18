// create your App component here
import React, { useState, useEffect} from "react";

function App(){
    const [loaded, setLoaded] = useState(false)
    const [dogs, setDogs] = useState({
        message:'',
        status:''
    })
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then ((response) =>response.json())
        .then((data)=> {
            setDogs(data)
            setLoaded(true)
        })
    },[])
    
    if(!loaded) return <p> Loading...</p>
    return (
        <div>
            <img src= {dogs.message} alt ="A Random Dog"/>
        </div>
    )

}

export default App;