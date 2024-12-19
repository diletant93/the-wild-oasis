import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";

function Dashboard() {
  // useEffect(function(){
  //   async function fetchCabins(){
  //     const response = await fetch('https://lfijklzpszkjdjzyuoco.supabase.co/rest/v1/cabins?select=*',{
  //       headers:{
  //         'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaWprbHpwc3pramRqenl1b2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDg5MjYsImV4cCI6MjA0OTA4NDkyNn0.0ojfnRaDM9Fh60Ys4AZMURux6e5AWEjNclcplLPwijo',
  //         'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaWprbHpwc3pramRqenl1b2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDg5MjYsImV4cCI6MjA0OTA4NDkyNn0.0ojfnRaDM9Fh60Ys4AZMURux6e5AWEjNclcplLPwijo'
  //       }
  //     })   
  //     if(!response.ok){
  //       console.error('error fetching')
  //     }else{
  //       const data = await response.json()
  //       console.log(data)
  //     }
  //   }
  //   fetchCabins()
  // })
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <DashboardFilter />
    </Row>
    <DashboardLayout />
    </>
  );
}

export default Dashboard;
