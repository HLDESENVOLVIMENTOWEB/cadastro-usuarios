import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { CreateUsers } from "./pages/CreateUsers"
import { UpdateUsers } from "./pages/UpdateUsers"
import { DefaultLayouts } from "./layouts/DefaultLayouts"

export function Router() {
    return (
        <Routes>
           <Route path="/" element={<DefaultLayouts />}>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateUsers />}/>
                <Route path="/update/:id" element={<UpdateUsers />}/>
           </Route>
        </Routes>
    )
}