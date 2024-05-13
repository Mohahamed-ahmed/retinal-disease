import { Outlet } from "react-router-dom";
import MainNav from "../Components/Main-Nav";
function Root(){
    return (
        <>
            <MainNav></MainNav>
            <Outlet></Outlet>
        </>
    )
}
export default Root;