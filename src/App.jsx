import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Spinner from "./ui/Spinner";
import ModeProvider from "./contexts/ModeProvider";
import GlobalStyles from "./styles/GlobalStyles";
const Bookings = lazy(()=>import("./pages/Bookings"))
const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Cabins = lazy(()=>import('./pages/Cabins'))
const NewUsers = lazy(() => import("./pages/Users"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Applayout = lazy(() => import("./ui/Applayout"));
const Booking = lazy(() => import("./pages/Booking"));
const Checkin = lazy(() => import("./pages/Checkin"));
const ExperimentalPage = lazy(() => import("./pages/ExperimentalPage"));
const ProtectedRoute = lazy(() => import("./ui/ProtectedRoute"));
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})

  

function App() {
  return (
    <Suspense fallback={<Spinner/>}>
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
    </Suspense>
  );
}

export default  App;