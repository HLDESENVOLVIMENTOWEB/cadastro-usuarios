import { Outlet } from "react-router-dom";

export function DefaultLayouts( ) {
   return (
    <div>
        <h1>Header</h1>
        <Outlet />
    </div>
   )
}