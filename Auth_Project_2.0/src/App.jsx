import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import MobileRegister from "./pages/Auth/MobileRegister";
import OtpVerification from "./pages/Auth/OtpVerification";
import EmailVerification from "./pages/Auth/EmailVerification";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import HomePage from "./pages/Home/ContentPages/HomePage";
import ExplorePage from "./pages/Home/ContentPages/ExplorePage";
import NotificationsPage from "./pages/Home/ContentPages/NotificationsPage";
import MessagesPage from "./pages/Home/ContentPages/MessagesPage";
import BookmarksPage from "./pages/Home/ContentPages/BookmarksPage";
import ListsPage from "./pages/Home/ContentPages/ListsPage";
import ProfilePage from "./pages/Home/ContentPages/ProfilePage";
import SettingsPage from "./pages/Home/ContentPages/SettingsPage";
import HelpPage from "./pages/Home/ContentPages/HelpPage";
import LogoutPage from "./pages/Home/ContentPages/LogoutPage";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailRegister from "./pages/Auth/EmailRegister";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* More routes will go here */}
        <Route path="/mobile-register" element={<MobileRegister />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/emailregister" element={<EmailRegister />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          {/* Nested routes */}

          {/* <Route index element={<Navigate to="home" replace />} /> */}
          <Route path="home" element={<HomePage />} />
          <Route path="explore" element={<ExplorePage />} />
          {/* Add other 8 pages routes here */}
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
          <Route path="lists" element={<ListsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="help" element={<HelpPage />} />
          {/* For Logout just redirect or handle logout logic */}
          <Route path="logout" element={<LogoutPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
