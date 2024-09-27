// import React, {useState} from 'react';

// const UseState= ()=>{
//     const initialCount = 0;
//     const [count,setCount] = useState(initialCount);
//     const incrementCount=()=>{
//         setCount((prevCount)=>prevCount+1);
//     }
//     const decrementCount=()=>{
//         if(count>0)
//         {
//             setCount((prevCount)=>prevCount-1);
//         }
//     }

//     return (
//         <>
//         <h1>Count: {count}</h1> <br/>
//         <button onClick={incrementCount}>Increment</button>
//         <button onClick={decrementCount}>Decrement</button>
//         </>
//     )
// }
// export default UseState;

import React, {useState} from 'react';
const UseState = ()=>{
    const[student, setStudent] = useState({
        name:"Ayush",
        age:20,
        cgpa: 7.6
    })
const changeCGPA = ()=>{
    setStudent((prevState)=>{return{...prevState, cgpa:9.8}});
}
    return(
        <>
        <h1> My name is {student.name}.My age is {student.age}. My cgpa is {student.cgpa} . </h1>
        <button onClick={changeCGPA}>Click Me</button>
        </>
    )
}

export default UseState