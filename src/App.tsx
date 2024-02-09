import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/topNavbar/topNavbar';
import Item from './components/sidebar_item/item';
import { LuHome } from "react-icons/lu";
import Sidebar from './components/sidebar/sidebar';
interface Data {
  icon: any;
  name: string;
}

const item1: Data = {
  icon: <LuHome/>,
  name: "Dashboard"
}

function App() {
  return (
    <>
      <TopNavbar/>
      <Sidebar/>
    </>
  );
}

export default App;
