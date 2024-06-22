import { Outlet } from "react-router-dom";
import MainNav from "../Components/Main-Nav";
import NotificationsList from "../Components/ui/NotificationsList";
import Footer from "../Components/Footer";

function Root() {
  return (
    <>
      <MainNav></MainNav>
      <main>
        <Outlet></Outlet>
        <NotificationsList />
      </main>
      <Footer></Footer>
    </>
  );
}
export default Root;
