import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks =() =>{
    return (
        <ul className="right">
        <li><NavLink to ='/'>Sign Up </NavLink></li>
        <li><NavLink to ='/'>Log Out </NavLink></li>
        
    </ul>
    )
}

export default SignedOutLinks;