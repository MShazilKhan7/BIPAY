import React from 'react';
import './App.css';
import Layout from './components/Layout/layout';
import { Routes,Route } from 'react-router-dom';
import DashboadContent from './components/Dashboard/content/db_content';
import JobDesk from './components/jobDesk/jobDesk_content';
import Allowance from './components/jobDesk/content/allowance/allowance';
import Attendance from './components/jobDesk/content/attendance/attendance';
function App() {

  return (
    <>
    
      <Routes>
        <Route path='/'                 element={<Layout />}>
          <Route index                  element={<DashboadContent/>}></Route>
          <Route index path='dashboard/'element={<DashboadContent/>}></Route>
          <Route path='jobdesk/'        element={<JobDesk/>}>
              <Route index              element={<Allowance/>}></Route>
              <Route path='allowance/'  element={<Allowance/>}></Route>
              <Route path='attendance/' element={<Attendance/>}></Route>
              <Route path='leave/'      element={<Allowance/>}></Route>
              <Route path='folder/'     element={<Allowance/>}></Route>
              <Route path='assets/'     element={<Allowance/>}></Route>
              <Route path='history/'    element={<Allowance/>}></Route>
              <Route path='salary/'     element={<Allowance/>}></Route>
              <Route path='payrun/'     element={<Allowance/>}></Route>
              <Route path='slip/'       element={<Allowance/>}></Route>
              <Route path='address/'    element={<Allowance/>}></Route>
              <Route path='contacts/'   element={<Allowance/>}></Route>
              <Route path='socilas/'    element={<Allowance/>}></Route>
          </Route>
          <Route path='leave/'          element={<DashboadContent/>}></Route>
          <Route path='attendance/'     element={<DashboadContent/>}></Route>
          <Route path='setting/'        element={<DashboadContent/>}></Route>
        </Route>
      </Routes>
      {/* {/* <TopNavbar/>
      <Sidebar/>
      <Header/> */}
      {/* <Layout />   */}
    </>
  );
}

export default App;
