import { Outlet } from "react-router-dom";
import MainNav from "../Components/Main-Nav";
import NotificationsList from "../Components/ui/NotificationsList";
function Root() {
  return (
    <>
      <MainNav></MainNav>
      <main>
        <Outlet></Outlet>
        <NotificationsList />
      </main>
    </>
  );
}
export default Root;
