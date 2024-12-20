import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import ModeProvider from "./contexts/ModeProvider";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import NewUsers from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import Applayout from "./ui/Applayout";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ExperimentalPage from "./pages/ExperimentalPage";
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
      <ModeProvider>
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
            <Route element={
              <ProtectedRoute>
                  <Applayout />
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to='/dashboard'></Navigate>}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/bookings" element={<Bookings />}/>
              <Route path="/bookings/:id" element={<Booking/>}/>
              <Route path="/checkin/:id" element={<Checkin/>}/>
              <Route path="/cabins" element={<Cabins />}/>
              <Route path="/users" element={<NewUsers />}/>
              <Route path="/settings" element={<Settings />}/>
              <Route path="/account" element={<Account />}/>
              <Route path="/experimental" element={<ExperimentalPage/>}/>
            </Route>
              <Route path="/login" element={<Login />}/>
              <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </ModeProvider>
    </QueryClientProvider>
  );
}

export default  App;