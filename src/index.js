import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals //it is the entry point
reportWebVitals();
//const myele=<h1 style ={{color:"red"}}>welcome</h1>
//root.render(myele);

/*const hello = new Date().getDate();
const ss = new Date().getFullYear();


root.render(hello);*/

//root.render(ss);
/*const hello = new Date().toLocaleDateString();
root.render(hello);
const time = new Date().toLocaleTimeString();
root.render(time);
const hi=<h5 style={{color:"orange"}}> hi i am lokesh and today date is {Date()}</h5>
root.render(hi);
*/
// function displaydate()
// {
//   const element =(
//     <div>
//     <h1>Hai there</h1>
//     <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )


// root.render(element);
// }
// setInterval(displaydate,1000);

// function formatName(user){
//   return user.firstname + ' ' + user.lastname;
// };
// const user = {
//   firstname : 'Ankit',
//   lastname : 'Kumar'
// };
// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );
// root.render(element);

// const element1=React.createElement("h2",{},"Hey this is h2");
// const element = React.createElement("h1",{},element1);
// root.render(element);
// const element3 =  React.createElement("h2", {
//   style: {
//     textAlign: "center"
//   }
// }, "Welcome To LPU \n Transforming Education Transforming India");
// const element2 = React.createElement(
//   "div", 
//   {
//     style: {
//       display: "flex", 
//       backgroundColor: "yellow", 
//       alignItems: "center",
//       justifyContent: "center",
//       height: "200px",
//       width: "300px",
//       marginTop: "13%",
//       marginLeft: "35%",
//       color : "red"
//     }
//   }, 
//  element3
// );

// const element = React.createElement("div", {}, element2);
// root.render(element);
// const element3 = React.createElement("ul",{},<li>1lb Salmon</li>,
// <li>1cup pine nuts</li>,<li>1 yellow squash</li>,
// <li>1/2 cup olive oil</li>,<li>3 cloves of garlic</li>,
// <li>2 cups butter lettuce</li>);
// const element2 = React.createElement(
//   "div", 
//   {
//     style: {
//       display: "flex", 
//       alignItems: "center",
//       justifyContent: "center",
//       height: "200px",
//       width: "300px",
//       marginTop: "13%",
//       marginLeft: "35%"
//     }
//   }, 
//  element3
// );
// const element1 = React.createElement("div",{},element2);


// root.render(element1);
