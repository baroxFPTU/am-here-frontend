import ChatLayout from "components/layout/ChatLayout";
import Chat from "pages/Chat";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path='/listeners/:id' element={<ListenerDetail />} />
          </Route>
          <Route path="/chat" element={<ChatLayout />}>
            <Route path="" element={<Chat />} />
          </Route>

          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
