import React, { useEffect, useRef, useContext } from 'react';
import classes from './cockpit.css';
import AuthContext from '../../containers/context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request
        // setTimeout(() => {
        //     alert('data has been saved on cloud!');
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    //only execute once
    },[]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = ' ';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref = {toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);