import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <GlobalStyles />
      <Toaster position='top-center'
       gutter={12}
        containerStyle={{margin:'8px'}} 
        toastOptions={{
          success:{
            duration:3000,
          },
          error:{
            duration:5000,
          },
          style:{
            fontSize:'16px',
            maxWidth:'30rem',
            padding:'16px 24px',
            backgroundColor:'var(--color-grey-0)',
            color:'var(--color-grey-700)'
          }
        }}/>
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
    </QueryClientProvider>
  );
}

export default  App;