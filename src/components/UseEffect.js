import React, {useState, useEffect}from 'react';

const UseEffect=()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((prevcount)=>prevcount+1);
        },1000);
    })
    
    return(
        <>
        <h1>Count: {count}</h1>

        </>
    )
}

export default UseEffect;