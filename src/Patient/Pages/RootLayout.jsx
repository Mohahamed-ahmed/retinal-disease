import { Outlet } from "react-router-dom";
import MainNav from "../Components/Main-Nav";
import Footer from "../Components/Footer";
function Root() {
  return (
    <>
      <MainNav></MainNav>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Root;
