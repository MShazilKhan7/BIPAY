import React from 'react';
import './App.css';
import Layout from './components/Layout/layout';
import { Routes,Route } from 'react-router-dom';
import DashboadContent from './components/Dashboard/content/db_content';
import JobDesk from './components/jobDesk/jobDesk_content';

function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DashboadContent/>}></Route>
          <Route index path='dashboard/' element={<DashboadContent/>}></Route>
          <Route path='jobdesk/' element={<JobDesk/>}></Route>
          <Route path='leave/' element={<DashboadContent/>}></Route>
          <Route path='attendance/' element={<DashboadContent/>}></Route>
          <Route path='setting/' element={<DashboadContent/>}></Route>
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
