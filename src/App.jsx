import React from "react";
import { BrowserRouter } from "react-router-dom";
import SidebarLayout from "./components/dashbardLayot/sidebar/SidebarLayout";
import HeaderLayout from "./components/dashbardLayot/header/HeaderLayout";
// import Content from "./components/ul/content"
import Dashboard from "./pages/Dashboard"
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app-container">

        {/* السايدبار على اليسار */}
        <SidebarLayout />

        {/* اليمين: هيدر فوق + محتوى تحت */}
        <div className="right-side bg-[rgb(244, 245, 247)] w-[1180px]">

          {/* الهيدر */}
          <HeaderLayout />

          {/* المحتوى */}
          <div className="content">
            <Dashboard />
          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;