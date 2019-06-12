import React from 'react'
import { isExpressionWrapper } from '@babel/types';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to ='/'>New Project</NavLink></li>
            <li><NavLink to ='/'>Log Out</NavLink></li>
            <li><NavLink to ='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
       
    )


}

export default SignedInLinks;