import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import Services from "../pages/Services";
import MyAccount from "../Dashboard/User-Account/MyAccount";
import MyAccount1 from "../Dashboard/User-Account copy/MyAccount";
import Dashboard from "../Dashboard/Doctor-Account/Dashboard";
import Dashboard1 from "../Dashboard/Volunteer-Account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Contact from "../pages/Contact";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Booking from "../components/Booking/Booking";
import UserNotifications from "../components/Notifications/Notifications";
import BookingD from "../components/Booking/BookingD";
import BookingV from "../components/Booking/BookingV";
import HomePage from "../pages/pages/Home";
import RoomPage from "../pages/pages/Room";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking/>} />
      <Route path="/bookingDoctor" element={<BookingD/>} />
      <Route path="/bookingVolunteer" element={<BookingV/>}/>
      <Route path="/vHome" element={<HomePage/>} />
      <Route path="/room/:roomId" element={<RoomPage/>}/>
      
      
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route path='user/notification' element={<UserNotifications/>}/>
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/volunteers/profile/me"
        element={
          <ProtectedRoute allowedRoles={["volunteer"]}>
            <MyAccount1 />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      {<Route path="/contact" element={<Contact/>} /> }
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};

export default Router;
