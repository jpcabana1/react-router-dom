import React from 'react';
import { Link } from 'react-router-dom';


function NavComp() {
    return ( 
        <ul>
            <li><Link to='/'>Comp1</Link></li>
            <li><Link to='comp2'>Comp2</Link></li>
            <li><Link to='comp3'>Comp3</Link></li>
        </ul>
     );
}

export default NavComp;