import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import NewUsers from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import { Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Applayout from "./ui/Applayout";

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Navigate to='/dashboard'></Navigate>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path="/cabins" element={<Cabins />}/>
          <Route path="/users" element={<NewUsers />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/account" element={<Account />}/>
        </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<PageNotFound />}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default  App;