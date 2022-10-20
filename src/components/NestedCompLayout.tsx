import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';


function NestedCompLayout() {
    return (
        <>
            <ul>
                <li><Link to=''>NestedComp1</Link></li>
                <li><Link to='nestedcomp2'>NestedComp2</Link></li>
                <li><Link to='nestedcomp3'>NestedComp3</Link></li>
            </ul>
            <Outlet />
        </>
    );
}

export default NestedCompLayout;