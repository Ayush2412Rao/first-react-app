import React from 'react';
import style from './styles.module.css';
// import picture from './images/water-and-fire-wings-gri3cjqejzpwtq3r.jpg'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
function Greetings(props){
    console.log(props)
    return(
        <>
            <img src="./images/water-and-fire-wings-gri3cjqejzpwtq3r.jpg" height="200" width="400"/>
            <h1 className={style.heading1}>Welcome On Board, {props.name}</h1>
            <h2>This is your classroom</h2>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>

            <button type="button" class="btn btn-link">Link</button>
        </>
    )
}
export default Greetings;