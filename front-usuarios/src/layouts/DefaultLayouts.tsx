import { Outlet } from "react-router-dom";

export function DefaultLayouts( ) {
   return (
    <div>
        <h1 style={{color: '#fff'}}>Header</h1>
        <Outlet />
    </div>
   )
}